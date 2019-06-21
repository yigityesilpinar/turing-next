import React from 'react';
import { rootReducer } from '@store/rootReducer';
import { rootSaga } from '@store/rootSaga';
import { EProductActions } from '@store/products/types';
import { EDepartmentActions } from '@store/departments/types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App, { Container } from 'next/app';
import axios from 'axios';
import withRedux, { MakeStore } from 'next-redux-wrapper';
import MainLayout from '@layouts/Main';
import Header from '@components/Header';

const makeStore: MakeStore = (initialState, _options) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

const setInitialProducts = async (ctx: any) => {
    const { limit } = ctx.store.getState().productStore;
    const res = await axios(`${process.env.API_BASE_URL}/products?limit=${limit}`);
    const productsResponse: IProductsResponse = res.data;
    // @ts-ignore
    ctx.store.dispatch({
        type: EProductActions.SET_PRODUCTS,
        products: productsResponse.rows,
    });
    ctx.store.dispatch({
        type: EProductActions.SET_COUNT,
        count: productsResponse.count,
    });
};
const setDepartments = async (ctx: any) => {
    const res = await axios(`${process.env.API_BASE_URL}/departments`);
    // @ts-ignore
    ctx.store.dispatch({
        type: EDepartmentActions.SET_DEPARTMENTS,
        departments: res.data,
    });
};

const setCustomer = async () => {
    // // TODO Handle logged in
    //     // await axios(`${process.env.API_BASE_URL}/customer`).catch(error => {
    //     //     const apiError: IApiError = error.response.data;
    //     //     // console.log(apiError.error.code);
    //     // });
};

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: any) {
        await setDepartments(ctx);
        await setInitialProducts(ctx);
        await setCustomer();
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
                    </MainLayout>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);
