import React from 'react';

import { Container, Image, Content, Price, Side } from './styled';
import { PRODUCT_IMAGE_PATH } from './static';

const Product: React.FC<IProduct> = ({ name, discounted_price, price, thumbnail }) => {
    return (
        <Container>
            <Side>
                <Image src={`${PRODUCT_IMAGE_PATH}/${thumbnail}`} alt={name} />
            </Side>
            <Content>
                <Price active={true}>&#163;{discounted_price || price}</Price>
                {discounted_price && <Price>&#163;{price}</Price>}
            </Content>
        </Container>
    );
};

export default Product;
