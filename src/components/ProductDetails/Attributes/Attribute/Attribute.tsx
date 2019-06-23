import React, { useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import { removeAttribute, setAttribute } from '@store/attributes/actions';

import { Container, getCustomSelectStyles, Name, SelectContainer } from './styled';

const Attribute: React.FC<IGroupedProductAttributes> = ({ attribute_name, values }) => {
    const dispatch = useDispatch();
    const attributes = useSelector<IAppState, IAppState['attributesStore']['attributes']>(
        state => state.attributesStore.attributes,
    );
    const storedAttribute = attributes.find(attr => attr.attribute_name === attribute_name);
    useEffect(() => {
        // on UnMount remove attribute from store
        return () => {
            dispatch(removeAttribute(attribute_name));
        };
    }, []);
    if (!storedAttribute) {
        // set first option as default
        dispatch(
            setAttribute({
                attribute_name,
                ...values[0],
            }),
        );
        return null;
    }

    // map for react-select
    const selectValues = values.map(v => ({
        value: v.attribute_value_id,
        label: v.attribute_value,
    }));

    // reverse map
    const handleChange = (v?: any) => {
        dispatch(
            setAttribute({
                attribute_name,
                attribute_value: v.label,
                attribute_value_id: v.value,
            }),
        );
    };
    // remove selected option from options list
    const filteredOptions = selectValues.filter(v => v.value !== storedAttribute.attribute_value_id);
    return (
        <Container>
            <Name>{attribute_name}</Name>
            <SelectContainer>
                <Select
                    styles={getCustomSelectStyles(attribute_name.toLowerCase() === 'color')}
                    value={{
                        value: storedAttribute.attribute_value_id,
                        label: storedAttribute.attribute_value,
                    }}
                    options={filteredOptions}
                    onChange={handleChange}
                />
            </SelectContainer>
        </Container>
    );
};

export default Attribute;
