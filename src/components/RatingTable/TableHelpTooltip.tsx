import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    "& span, & svg": {
      fontSize: "12px",
      margin: 0,
      padding: 0,
    },
  },
});

function TableHelpTooltip() {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.item}>
        <ListItemText primary="• Ипользуйте строку поиска для фильтрации данных" />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemText primary="• Нажмите на шапку колонки для сортировки данных" />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemText primary="• Нажмите на название школы для перехода на сайт" />
      </ListItem>
    </List>
  );
}

export default TableHelpTooltip;
