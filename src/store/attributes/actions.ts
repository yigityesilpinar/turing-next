import { EAttributesActions, TAttributesActionTypes } from './types';

export function setAttribute(attribute: IAttributeInProduct): TAttributesActionTypes {
    return {
        type: EAttributesActions.SET_ATTRIBUTE,
        attribute,
    };
}

export function removeAttribute(attribute_name: IAttributeInProduct['attribute_name']): TAttributesActionTypes {
    return {
        type: EAttributesActions.REMOVE_ATTRIBUTE,
        attribute_name,
    };
}
