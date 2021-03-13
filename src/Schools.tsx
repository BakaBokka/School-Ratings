import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import RatingTable from "./components/RatingTable/RatingTable";
import RatingMap from "./components/RatingMap/RatingMap";
import { Data, TableType } from "./utils/types";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  mapContainer: {
    width: "50%",
    height: "calc(50vw/1.33)",
    margin: "30px",
    position: "relative",

  },
});

function Schools(props: { data: Data }) {
  const classes = useStyles();
  const [tableType, setTableType] = useState<TableType>("mos");
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };


  const columns = useMemo(
    () => props.data.columns,
    // eslint-disable-next-line
    []
  );

  const rows = useMemo(
    () => props.data.schools,
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Header setTableType={setTableType} />
        {tableType === "mos" ? (
          <RatingTable columns={columns} data={rows}  />
        ) : (
          "Другая таблица"
        )}
        <div className={classes.mapContainer}>
        <RatingMap data={props.data.schools} />
        </div>

      </Container>
    </div>
  );
}

export default Schools;
