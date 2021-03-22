import React from "react";
import clsx from "clsx";
import GlobalFilter from "./GlobalFilter";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import TableHelpTooltip from "./TableHelpTooltip";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {},
  search: {
    display: "flex",
  },
  customWidth: {
    maxWidth: "500px",
    
  },
}));

const longText = <TableHelpTooltip />;

const TableToolbar = (props) => {
  const classes = useToolbarStyles();
  const {
    numSelected,

    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
  } = props;
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.search}>
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Поиск:
        </Typography>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <Tooltip
        title={longText}
        placement="left-end"
        classes={{ tooltip: classes.customWidth }}
      >
        <HelpOutlineRoundedIcon />
      </Tooltip>
    </Toolbar>
  );
};

export default TableToolbar;
