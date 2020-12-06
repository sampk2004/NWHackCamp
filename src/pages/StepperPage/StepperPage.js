import React from "react";
import Stepper from "@material-ui/core/Stepper";
import StepConnector from "@material-ui/core/StepConnector";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import styles from "./StepperPage.module.css";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function QontoStepIcon(props) {
  const { active, completed } = props;

  return (
    <div
      className={clsx(styles.root, {
        [styles.active]: active,
      })}
    >
      {completed ? (
        <Check className={styles.completed} />
      ) : (
        <div className={styles.circle} />
      )}
    </div>
  );
}

function StepperPage() {
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<StepConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default StepperPage;
