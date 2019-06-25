import styled from 'styled-components';

import CommonImage from '@common/Image';
import CommonButton from '@common/Button';
import CommonH1 from '@common/H1';
import CommonText from '@common/Text';
import CommonModal from '@common/Modal';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Name = styled(CommonH1)`
    display: flex;
    flex-basis: 100%;
    padding-bottom: 24px;
`;
export const ImageContainer = styled.div`
    flex-basis: 20%;
`;

export const InteractiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
`;
export const Image = styled(CommonImage)`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
`;
export const Description = styled(CommonText)`
    display: flex;
    flex-basis: 30%;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddToCart = styled(CommonButton)`
    max-width: 200px;
    margin-top: 20px;
`;

export const Modal = CommonModal;
