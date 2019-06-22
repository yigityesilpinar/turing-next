import React from 'react';
import Stars from 'react-stars';

import Colors from '@theme/colors';
import { formatDateStr, normalizeRating } from '@utils/global';

import { Container, Time, ReviewText, Reviewer, StarsContainer } from './styled';

const Review: React.FC<IReview> = ({ review, name, rating, created_on }) => {
    return (
        <Container>
            <Reviewer>{name},</Reviewer>
            <Time>{formatDateStr(created_on)}</Time>
            <StarsContainer>
                <Stars value={normalizeRating(rating)} edit={false} color1={Colors.lightGray} color2={Colors.active} />
            </StarsContainer>
            <ReviewText>{review}</ReviewText>
        </Container>
    );
};

export default Review;
