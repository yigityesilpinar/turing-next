export enum EAppActions {
    SET_IS_MOBILE = 'SET_IS_MOBILE',
}

export interface IAppStore {
    isMobile: boolean;
}

interface ISetIsMobile {
    type: EAppActions.SET_IS_MOBILE;
    isMobile: boolean;
}

export type TAppActionTypes = ISetIsMobile;
