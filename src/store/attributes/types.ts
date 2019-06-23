export enum EAttributesActions {
    SET_ATTRIBUTE = 'SET_ATTRIBUTE',
    REMOVE_ATTRIBUTE = 'REMOVE_ATTRIBUTE',
}

export interface IAttributesStore {
    attributes: Array<IAttributeInProduct>;
}

interface ISetAttribute {
    type: EAttributesActions.SET_ATTRIBUTE;
    attribute: IAttributeInProduct;
}

interface IRemoveAttribute {
    type: EAttributesActions.REMOVE_ATTRIBUTE;
    attribute_name: IAttributeInProduct['attribute_name'];
}

export type TAttributesActionTypes = ISetAttribute | IRemoveAttribute;
