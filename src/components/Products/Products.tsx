import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { IAppState } from '@store/rootReducer';
import Product from '@components/Product';

import { Container } from './styled';
import { setPage } from '@store/products/actions';

const Products: React.FC = () => {
    const { products, count, page, limit } = useSelector<IAppState, IAppState['productStore']>(
        state => state.productStore,
    );
    const dispatch = useDispatch();
    const handleNext = () => dispatch(setPage(page + 1));
    return (
        <Container>
            <div>
                You are seeing {products.length} of total {count} results!
                {products.length < count && <span> Scroll down to browse all!</span>}
            </div>
            <InfiniteScroll
                dataLength={products.length} //This is important field to render the next data
                next={handleNext}
                hasMore={count > page * limit}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {products.map(product => (
                    <Product key={product.product_id} {...product} />
                ))}
            </InfiniteScroll>
        </Container>
    );
};

export default Products;
