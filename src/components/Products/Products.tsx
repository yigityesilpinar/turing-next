import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { IAppState } from '@store/rootReducer';
import Product from './Product';
import { Container, ListContainer, PaginationContainer } from './styled';
import { setPage } from '@store/products/actions';

const Products: React.FC = () => {
    const { products, count, limit, page } = useSelector<IAppState, IAppState['productStore']>(
        state => state.productStore,
    );
    const dispatch = useDispatch();
    const handlePageChange = ({ selected }: { selected: number }) => {
        dispatch(setPage(selected + 1));
    };
    return (
        <Container>
            {count ? (
                <PaginationContainer>
                    <ReactPaginate
                        forcePage={page - 1}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={count / limit}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        marginPagesDisplayed={5}
                    />
                </PaginationContainer>
            ) : null}
            <ListContainer>
                {products.map(product => (
                    <Product key={product.product_id} {...product} />
                ))}
            </ListContainer>
        </Container>
    );
};

export default Products;
