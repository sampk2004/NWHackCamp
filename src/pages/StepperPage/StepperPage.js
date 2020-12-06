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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import "swiper/swiper.scss";

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
            setActiveStep(activeIndex);
          }
        }}
      >
        {orgs.map(({ name, logo }) => (
          <SwiperSlide key={name}>
            <div className={styles.orgIcon}>
              <ChevronLeftIcon />
              <ImageCropper>{logo}</ImageCropper>
              <ChevronRightIcon />
            </div>
            {name}
          </SwiperSlide>
        ))}

        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<StepConnector />}
        >
          {orgs.map(({ name }) => (
            <Step key={name}>
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
              />
            </Step>
          ))}
        </Stepper>
      </Swiper>
    </>
  );
}

export default StepperPage;
