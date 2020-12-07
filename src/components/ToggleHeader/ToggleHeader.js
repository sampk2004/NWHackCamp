import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styles from "./ToggleHeader.module.css";

export default function ToggleHeader() {
  const history = useHistory();

  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={7} direction="row" alignItems="center">
      <Grid item>
        <IconButton onClick={() => history.push("/main-page")}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton className={styles.toggleButtonLeft} value="Map">
            Map
          </ToggleButton>
          <ToggleButton className={styles.toggleButtonRight} value="List">
            List
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
