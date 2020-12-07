import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import Stepper from "@material-ui/core/Stepper";
import StepConnector from "@material-ui/core/StepConnector";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import "swiper/swiper.scss";

import Header from "../../components/Header/Header";
import styles from "./Intro.module.css";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";

function Intro({ nonprofits }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const pages = [
    <div className={styles.introContainer}>
      <img className={styles.one} src="/intro/1.png" />
    </div>,

    <div className={styles.introContainer}>
      <img className={styles.two} src="/intro/2.png" />
    </div>,

    <div className={styles.introContainer}>
      <img className={styles.three} src="/intro/3.png" />
    </div>,
    <div className={styles.introContainer}>
      <img className={styles.four} src="/intro/4.png" />
      <div>
        <ButtonStyled buttonName={"Get Started"} location={"/welcome-page"} />
      </div>
    </div>,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={200}
          onSlideChange={({ activeIndex }) => {
            if (activeIndex != null) {
              setActiveStep(activeIndex);
            }
          }}
        >
          {pages.map((page, index) =>
            page ? (
              <SwiperSlide>{page}</SwiperSlide>
            ) : (
              <SwiperSlide>Page {index}</SwiperSlide>
            )
          )}
        </Swiper>
        <div class="push"></div>
      </div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<StepConnector />}
        className={styles.footer}
      >
        {pages.map((page, index) => (
          <Step key={index}>
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

export default Intro;
