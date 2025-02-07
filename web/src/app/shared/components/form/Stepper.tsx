import React from 'react';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex justify-between mb-8 gap-3">
            {steps.map((step, index) => (
                <div key={index} className="flex-1  py-3 ">
                    <div className={`text-center py-4 rounded-lg  mx-auto  ${index <= currentStep ? 'text-white bg-green-600' : 'text-gray-500'}`}>
                        {step}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stepper;