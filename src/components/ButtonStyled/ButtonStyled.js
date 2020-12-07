import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Button.module.css";
import Button from '@material-ui/core/Button';

export default function ButtonStyled({ location, buttonName }) {
  const history = useHistory();

  const gotoMaps = () => {
    history.push(location);
  };

  return (
    <Button
      variant="contained"
      className={styles.buttonContainer}
      onClick={gotoMaps}
    >{buttonName}</Button>
  );
}
