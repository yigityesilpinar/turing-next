import React, { useState } from 'react';
import Select from 'react-select';

import { Container, getCustomSelectStyles, Name, SelectContainer } from './styled';

const Attribute: React.FC<IGroupedProductAttributes> = ({ attribute_name, values }) => {
    const selectValues = values.map(v => ({
        value: v.attribute_value_id,
        label: v.attribute_value,
    }));
    const [selected, setSelected] = useState(selectValues[0]);
    const handleChange = (v: any) => setSelected(v);
    const filteredOption = selectValues.filter(v => v.value !== selected.value);
    return (
        <Container>
            <Name>{attribute_name}</Name>
            <SelectContainer>
                <Select
                    styles={getCustomSelectStyles(attribute_name.toLowerCase() === 'color')}
                    value={selected}
                    options={filteredOption}
                    onChange={handleChange}
                />
            </SelectContainer>
        </Container>
    );
};

export default Attribute;
