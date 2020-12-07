import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ToggleHeader from "../../components/ToggleHeader/ToggleHeader";
import styles from "./List.module.css";

function ListView({ nonprofits }) {
  return (
    <>
      <ToggleHeader />
      <List>
        {nonprofits.map(({ name, summary, logo }) => (
          <ListItem>
            <img className={styles.icon} src="/logo192.png" />
            {name}
            {summary}
            <ChevronRightIcon className={styles.chevron} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListView;
