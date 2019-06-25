import { ECheckoutActions, TCheckoutActionTypes } from './types';

export function setCheckoutStep(step: number): TCheckoutActionTypes {
    return {
        type: ECheckoutActions.SET_STEP,
        step,
    };
}
