import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import styles from "./List.module.css";

function ListView() {
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
    <List>
      {orgs.map(({ name, desc, logo }) => (
        <ListItem>
          {logo}
          {name}
          {desc}
          <ChevronRightIcon className={styles.chevron} />
        </ListItem>
      ))}
    </List>
  );
}
export default ListView;