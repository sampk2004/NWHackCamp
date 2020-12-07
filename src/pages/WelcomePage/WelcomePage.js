import React from "react";
import styles from "./Welcome.module.css";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled"

export default function WelcomePage() {
  return (
    <>
      <div className={styles.welcome}>
        <img src="/WelcomePage.png" alt="welcomePage" />
      </div>
      <br />
      <br />
      <div className={styles.welcome}>
        <ButtonStyled buttonName={"View Local Organization"} location={"./main-page"}/>
      </div>
    </>
  );
}
