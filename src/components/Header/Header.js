import styles from "./Header.module.css";
import { IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MapIcon from "@material-ui/icons/Map";
import { Switch, useHistory } from "react-router-dom";

function Header({ children }) {
  const history = useHistory();

  const gotoMaps = () => {
    history.push("/map-view");
  };
  return (
    <>
      <img src="/header.png" className={styles.header} alt="image" />
      <div className={styles.buttonContainer}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={gotoMaps}>
          <MapIcon />
        </IconButton>
      </div>
      {children}
    </>
  );
}

export default Header;
