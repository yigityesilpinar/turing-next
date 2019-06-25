import React from 'react';

import { IStepsBar } from './types';
import { Container, Dot, Line, LabelsContainer, Label } from './styled';

const createIterator = (length: number) => {
    let iterator = [];
    for (let i = 1; i <= length; i++) {
        iterator.push(i);
    }
    return iterator;
};

const StepsBar: React.FC<IStepsBar> = ({ currentStep, stepCount, dotSize = 16, lineSize = 6, labels = [] }) => {
    const iterator = createIterator(stepCount);
    return (
        <Container>
            {iterator.map(step => [
                <Dot key={`dot_${step}`} size={dotSize} active={step <= currentStep} />,
                step < iterator.length ? (
                    <Line
                        dotSize={dotSize}
                        key={`line_${step}`}
                        count={stepCount - 1}
                        size={lineSize}
                        active={step < currentStep}
                        isLast={step === stepCount - 1}
                    />
                ) : null,
            ])}
            {labels && (
                <LabelsContainer>
                    {labels.map(label => (
                        <Label key={label}>{label}</Label>
                    ))}
                </LabelsContainer>
            )}
        </Container>
    );
};

export default StepsBar;
