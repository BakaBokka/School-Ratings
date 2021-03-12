import React, { useState, useEffect } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import CollapseTable from "./CollapseTable";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  collapsedCell: {
    backgroundColor: "#e9e9e9",
    padding: "0",
  },
});

function CollapserRow({ row }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const branches = row.original.branches;

  useEffect(() => {
    !branches && setOpen(false);
    // eslint-disable-next-line
  }, [row]);

  return (
    <>
      <TableRow>
        <TableCell>{row.original.rate20}</TableCell>
        <TableCell>{row.original.score}</TableCell>
        <TableCell>
          <a href={row.original.url} target="__blank">{row.original.school}</a>
          {branches ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        <TableCell>{row.original.adress}</TableCell>
        <TableCell>{row.original.area}</TableCell>
        <TableCell>{row.original.district}</TableCell>
        <TableCell>{row.original.rate19}</TableCell>
        <TableCell>{row.original.rate18}</TableCell>
        <TableCell>{row.original.rate17}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.collapsedCell} colSpan={9}>
          <CollapseTable open={open} branches={branches} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default CollapserRow;
