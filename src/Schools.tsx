import React, {  useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography,  Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import MoscowPage from "./components/Pages/MoscowPage";
import { Data, TableType } from "./utils/types";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  title: {
    color: "#4f4f4f",
    fontSize: "36px"
  }

});

function Schools(props: { data: Data }) {
  const classes = useStyles();
  const [tableType, setTableType] = useState<TableType>("mos");
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
        <Header setTableType={setTableType} />
        <Typography variant="h3" component="h1" className={classes.title}>
        Рейтинг школ
      </Typography>
        {tableType === "mos" ? (
          <MoscowPage data={props.data} />
        ) : (
          "Скоро всё будет"
        )}
      </Container>
    </div>
  );
}

export default Schools;
