import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import Stepper from "@material-ui/core/Stepper";
import StepConnector from "@material-ui/core/StepConnector";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import "swiper/swiper.scss";

import Header from "../../components/Header/Header";
import styles from "./StepperPage.module.css";

function ImageCropper({ children }) {
  return <div className={styles.imageCropper}>{children}</div>;
}

function StepperPage({ nonprofits }) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Swiper
          spaceBetween={200}
          onSlideChange={({ activeIndex }) => {
            if (activeIndex != null) {
              setActiveStep(activeIndex);
            }
          }}
        >
          {nonprofits.map(({ name, description, logo }) => (
            <SwiperSlide className={styles.slide} key={name}>
              <div className={styles.orgIcon}>
                <ChevronLeftIcon className={styles.chevron} />
                <ImageCropper>
                  <img src="/logo192.png" class="rounded" />
                </ImageCropper>
                <ChevronRightIcon className={styles.chevron} />
              </div>
              <div className={styles.name}>{name}</div>
              <div className={styles.desc}>{description}</div>
              <div className={styles.button}>
                <Button variant="contained" color="primary">
                  Make a Donation
                </Button>
              </div>
              <div className={styles.button}>
                <Button variant="outlined">Learn More</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="push"></div>
      </div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<StepConnector />}
        className={styles.footer}
      >
        {nonprofits.map(({ name }) => (
          <Step key={name}>
            <StepLabel
              StepIconComponent={({ active }) => (
                <div className={styles.root}>
                  <div
                    className={clsx(styles.circle, {
                      [styles.active]: active,
                    })}
                  />
                </div>
              )}
            />
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepperPage;
