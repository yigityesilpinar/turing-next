import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App, { Container } from 'next/app';
import axios from 'axios';
import withRedux, { MakeStore } from 'next-redux-wrapper';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { rootReducer } from '@store/rootReducer';
import { rootSaga } from '@store/rootSaga';
import { EProductActions } from '@store/products/types';
import { EDepartmentActions } from '@store/departments/types';
import MainLayout from '@layouts/Main';
import Header from '@components/Header';
import productsApi from '@api/products';
import Auth from '@components/Auth';
import ProductDetails from '@components/ProductDetails';
import PageView from '@components/PageView';

const makeStore: MakeStore = (initialState, _options) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

toast.configure({
    autoClose: 5000,
    draggable: false,
});

const setInitialProducts = async (ctx: any) => {
    const { limit } = ctx.store.getState().productStore;
    try {
        const res = await axios(`${process.env.API_BASE_URL}/products?limit=${limit}`);
        const productsResponse: IProductsResponse = res.data;
        ctx.store.dispatch({
            type: EProductActions.SET_PRODUCTS,
            products: productsResponse.rows,
        });
        ctx.store.dispatch({
            type: EProductActions.SET_COUNT,
            count: productsResponse.count,
        });
    } catch (e) {
        console.log(e);
    }
    try {
        const attributeWithValues = await productsApi.getAttributeWithValues();
        ctx.store.dispatch({
            type: EProductActions.SET_ATTRIBUTES,
            attributes: attributeWithValues,
        });
    } catch (e) {
        console.log(e);
    }
};

const setDepartments = async (ctx: any) => {
    const res = await axios(`${process.env.API_BASE_URL}/departments`);
    // @ts-ignore
    ctx.store.dispatch({
        type: EDepartmentActions.SET_DEPARTMENTS,
        departments: res.data,
    });
};

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: any) {
        await setDepartments(ctx);
        await setInitialProducts(ctx);
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        // @ts-ignore
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <MainLayout>
                        <Header />
                        <Component {...pageProps} />
                        {/*modal components*/}
                        <Auth />
                        <ProductDetails />
                        <PageView />
                    </MainLayout>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);
