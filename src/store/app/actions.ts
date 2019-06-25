import { EAppActions, TAppActionTypes } from './types';

export function setIsMobile(isMobile: boolean): TAppActionTypes {
    return {
        type: EAppActions.SET_IS_MOBILE,
        isMobile,
    };
}
