import React, {useMemo, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import RatingTable from "./components/RatingTable/RatingTable";
import {Data, TableType} from "./utils/types";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection:"column",

    alignItems: "center"

  },
});

function Schools(props: {data: Data}) {
  const classes = useStyles();
  const [tableType, setTableType] = useState<TableType>("mos");
  
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
    <div >
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Header setTableType={setTableType}/>
       { tableType === "mos" ?  <RatingTable columns={columns} data={rows}/> : "Другая таблица"}
      </Container>
    </div>
  );
}

export default Schools;
