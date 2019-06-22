import React, { useEffect, useState } from 'react';

import productsApi from '@api/products';

import Review from './Review';
import AddReview from './AddReview';
import { Container } from './styled';

const Reviews: React.FC<{ product_id: IProduct['product_id'] }> = ({ product_id }) => {
    const [reviews, setReviews] = useState<Array<IReview>>([]);
    useEffect(() => {
        productsApi.getProductReviews(product_id).then(([rws]) => {
            setReviews(rws || []);
        });
    }, []);
    return (
        <Container>
            <AddReview product_id={product_id} />
            {reviews.map((review, i) => (
                <Review key={i} {...review} />
            ))}
        </Container>
    );
};

export default Reviews;
