interface IAttribute {
    attribute_id: number;
    name: string;
}

interface IAttributeValue {
    attribute_value_id: number;
    value: string;
}

interface IAttributeWithValues extends IAttribute {
    values: Array<IAttributeValue>;
}

interface IAttributeInProduct {
    attribute_name: string;
    attribute_value_id: number;
    attribute_value: 'string';
}

interface IGroupedProductAttributes {
    attribute_name: string;
    values: Array<Omit<IAttributeInProduct, 'attribute_name'>>;
}
