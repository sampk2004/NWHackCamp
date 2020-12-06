import React from "react";
import Stepper from "@material-ui/core/Stepper";
import StepConnector from "@material-ui/core/StepConnector";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import styles from "./StepperPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import ViewListIcon from "@material-ui/icons/ViewListOutlined";
import IconButton from "@material-ui/core/IconButton";

import "swiper/swiper.scss";

function getSteps() {
  return ["", "", "", ""];
}

function StepperPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  return (
    <>
      <div className={styles.buttons}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <ViewListIcon />
        </IconButton>
      </div>
      <Swiper
        spaceBetween={50}
        onSlideChange={({ activeIndex }) => {
          if (activeIndex != null) {
            console.log({ activeIndex });
            setActiveStep(activeIndex);
          }
        }}
      >
        {steps.map((_, index) => (
          <SwiperSlide>Slide {index}</SwiperSlide>
        ))}

        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<StepConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={({ active, completed }) => (
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
                )}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Swiper>
    </>
  );
}

export default StepperPage;
