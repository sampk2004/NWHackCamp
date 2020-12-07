import styles from "./Header.module.css";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import ViewListIcon from "@material-ui/icons/ViewListOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

function Header({ children }) {
  const history = useHistory();

  const gotoMaps = () => {
    history.push("/map-view");
  };
  return (
    <div className={styles.buttonContainer}>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton onClick={gotoMaps}>
        <ViewListIcon />
      </IconButton>
    </div>
  );
}

export default Header;
