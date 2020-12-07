import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ToggleHeader from "../../components/ToggleHeader/ToggleHeader";
import styles from "./List.module.css";

function ListView({ nonprofits }) {
  return (
    <>
      <ToggleHeader />
      <List>
        {nonprofits.map(({ name, summary, logo }, index) => (
          <>
            {index > 0 && <Divider />}
            <ListItem className={styles.listItem}>
              <img className={styles.icon} src="/list/green_chair.png" />
              <div className={styles.text}>
                <Typography className={styles.name}>{name}</Typography>
                <Typography className={styles.summary}>{summary}</Typography>
              </div>
              <ChevronRightIcon className={styles.chevron} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}

export default ListView;
