import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import MoscowPage from "./components/Pages/MoscowPage";
import PiterPage from "./components/Pages/PiterPage";
import { Data } from "./utils/types";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    color: "#4f4f4f",
    fontSize: "36px",
  },
});

function Schools(props: { data: Data }) {
  const classes = useStyles();

  return (
    <HashRouter>
      <div>
        <CssBaseline />

        <Container maxWidth="xl" className={classes.container}>
          <Header />
          <Typography variant="h3" component="h1" className={classes.title}>
            Рейтинг школ
          </Typography>
          <Switch>
            <Route exact path="/">
              <MoscowPage data={props.data} />
            </Route>
            <Route path="/piter">
              <PiterPage data={props.data} />
            </Route>
          </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}

export default Schools;
