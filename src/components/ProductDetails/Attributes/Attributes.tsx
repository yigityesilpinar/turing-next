import React, { useEffect, useState } from 'react';

import productsApi from '@api/products';
import { groupProductAttributes } from '@utils/product';

import Attribute from './Attribute';
import { Container } from './styled';

const Attributes: React.FC<{ product_id: IProduct['product_id'] }> = ({ product_id }) => {
    const [attributes, setAttributes] = useState<Array<IGroupedProductAttributes>>([]);
    useEffect(() => {
        productsApi.getAttributesInProduct(product_id).then(([attrs = []]) => {
            setAttributes(groupProductAttributes(attrs));
        });
    }, []);
    return (
        <Container>
            {attributes.map((attribute, i) => (
                <Attribute key={i} {...attribute} />
            ))}
        </Container>
    );
};

export default Attributes;
