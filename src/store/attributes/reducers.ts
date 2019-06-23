import { EAttributesActions, IAttributesStore, TAttributesActionTypes } from './types';

const initialState: IAttributesStore = {
    attributes: [],
};

export const attributesReducer = (state = initialState, action: TAttributesActionTypes) => {
    switch (action.type) {
        case EAttributesActions.SET_ATTRIBUTE:
            const coptAttributes = state.attributes.slice();
            const foundIndex = coptAttributes.findIndex(
                attr => attr.attribute_name === action.attribute.attribute_name,
            );
            // UPDATE
            if (foundIndex !== -1) {
                return Object.assign({}, state, {
                    attributes: Object.assign(coptAttributes, {
                        [foundIndex]: action.attribute,
                    }),
                });
            }
            // ADD
            return Object.assign({}, state, {
                attributes: coptAttributes.concat([action.attribute]),
            });

        case EAttributesActions.REMOVE_ATTRIBUTE:
            return Object.assign({}, state, {
                attributes: state.attributes.filter(attr => attr.attribute_name !== action.attribute_name),
            });
    }
    return state;
};

export default attributesReducer;
