export interface IStepsBar {
    stepCount: number;
    currentStep: number;
    dotSize?: number;
    lineSize?: number;
    labels?: Array<string>;
}

export interface IDotProps extends IWithActiveProp, IWithSizeProp {}

export interface ILineProps extends IDotProps {
    dotSize: number;
    count: number;
    isLast?: boolean;
}
