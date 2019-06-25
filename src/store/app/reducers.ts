import { EAppActions, IAppStore, TAppActionTypes } from './types';

const initialState: IAppStore = {
    isMobile: false,
};

export const appReducer = (state = initialState, action: TAppActionTypes) => {
    switch (action.type) {
        case EAppActions.SET_IS_MOBILE:
            return Object.assign({}, state, { isMobile: action.isMobile });
    }
    return state;
};

export default appReducer;
