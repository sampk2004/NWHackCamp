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

function StepperPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const orgs = [
    {
      name: "Green Chair Recycling",
      desc:
        "The volunteer team monitors recycling bins to maximize recycling, educate the public, and inspire others. Attend community events, educate attendees on proper recycling techniques, and show how easy and beneficial recycling and environmental initiatives can be.",
      logo: <img src="/logo192.png" class="rounded" />,
    },
    {
      name: "Green Chair Recycling",
      desc:
        "The volunteer team monitors recycling bins to maximize recycling, educate the public, and inspire others. Attend community events, educate attendees on proper recycling techniques, and show how easy and beneficial recycling and environmental initiatives can be.",
      logo: <img src="/logo192.png" class="rounded" />,
    },
  ];

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
          {orgs.map(({ name, desc, logo }) => (
            <SwiperSlide className={styles.slide} key={name}>
              <div className={styles.orgIcon}>
                <ChevronLeftIcon className={styles.chevron} />
                <ImageCropper>{logo}</ImageCropper>
                <ChevronRightIcon className={styles.chevron} />
              </div>
              <div className={styles.name}>{name}</div>
              <div className={styles.desc}>{desc}</div>
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
        {orgs.map(({ name }) => (
          <Step key={name}>
            <StepLabel
              StepIconComponent={({ active, completed }) => (
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
