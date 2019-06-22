import React, { useState } from 'react';
import Stars from 'react-stars';
import { toast } from 'react-toastify';
import Colors from '@theme/colors';
import productsApi from '@api/products';

import { Button, Container, StarsContainer, TextArea } from './styled';
import { IAddReview, IState } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '@store/rootReducer';
import { setShowAuth } from '@store/customer/actions';

const initalState = {
    text: '',
    rating: 0,
};

const AddReview: React.FC<IAddReview> = ({ product_id }) => {
    const accessToken = useSelector<IAppState, IAppState['customerStore']['accessToken']>(
        state => state.customerStore.accessToken,
    );
    const dispatch = useDispatch();
    const [{ text, rating }, setState] = useState<IState>(initalState);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.persist();
        setState(state => ({ ...state, text: e.target.value }));
    };

    const handleRatingChange = (rating: number) => {
        setState(state => ({ ...state, rating }));
    };

    const handleSubmit = async () => {
        if (!accessToken) {
            dispatch(setShowAuth('login'));
            return;
        }
        const [, err] = await productsApi.postProductReview(
            {
                review: text,
                rating,
                product_id,
            },
            accessToken,
        );
        if (err) {
            toast.error(err.message);
        } else {
            toast.success('Thanks for submitting the review!');
            setState(initalState);
        }
    };

    return (
        <Container>
            <TextArea value={text} onChange={handleTextChange} />
            <StarsContainer>
                <Stars
                    size={24}
                    half={false}
                    value={rating}
                    color1={Colors.lightGray}
                    color2={Colors.active}
                    onChange={handleRatingChange}
                />
            </StarsContainer>
            <Button onClick={handleSubmit}>Submit review</Button>
        </Container>
    );
};

export default AddReview;
