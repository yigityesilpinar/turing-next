export enum ECheckoutActions {
    SET_STEP = 'SET_STEP',
}

export interface ICheckoutStore {
    step: number;
}

interface ISetCheckoutStep {
    type: ECheckoutActions.SET_STEP;
    step: number;
}

export type TCheckoutActionTypes = ISetCheckoutStep;
