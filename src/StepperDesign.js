import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Personalinfo from './Personalinfo';
import BankDetails from './BankDetails';
import KrishiCheckbox from './KrishiCheckbox';
const Steps = ['personal Info', 'Bank', 'Farm', 'Assets', 'Loan', 'Notes'];
const StepperDesign = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [skipSteps, setSkipSteps] = useState([]);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
		setSkipSteps(skipSteps.filter((skipItem) => skipItem !== activeStep));
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};
	const isStepOptional = (step) => {
		return step === 1 || step === 2;
	};
	const isStepSkipped = (step) => {
		return skipSteps.includes(step);
	};
	const handleSkip = () => {
		if (!isStepSkipped(activeStep)) {
			setSkipSteps([...skipSteps, activeStep]);
		}

		setActiveStep(activeStep + 1);
	};
	const getContent = (step) => {
		switch (step) {
			case 0:
				return <Personalinfo />;
			case 1:
				return <BankDetails />;

			case 2:
				return <KrishiCheckbox />;

			default:
				break;
		}
	};
	return (
		<>
			<div className='container space'>
				<Stepper activeStep={activeStep}>
					{Steps.map((step, index) => {
						const labelProps = {};
						const stepProps = {};
						if (isStepOptional(index)) {
							labelProps.optional = (
								<h6 className='' style={{ textAlign: 'center', display: 'block' }}>
									optional
								</h6>
							);
						}
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step {...stepProps} key={index}>
								<StepLabel {...labelProps}>{step}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				<form>{getContent(activeStep)}</form>
				{activeStep == Steps.length ? (
					<h4>Thank you</h4>
				) : (
					<>
						{' '}
						<div className='mt-5'>
							<button type='button' className='btn btn-primary' onClick={handleBack} disabled={activeStep === 0}>
								Back
							</button>
							{isStepOptional(activeStep) && (
								<button type='button' className='btn btn-primary' onClick={handleSkip}>
									Skip
								</button>
							)}

							<button type='button' className='btn btn-primary' onClick={handleNext}>
								{activeStep === Steps.length - 1 ? 'Finish' : 'Next'}
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default StepperDesign;
