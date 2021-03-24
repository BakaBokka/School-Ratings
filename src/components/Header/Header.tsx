import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "20px",
  },
});

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Школы Москвы" component={Link} to="/" />
        <Tab label="Школы Питера" component={Link} to="/piter" />
        {/* <Tab label="Школы России" /> */}
      </Tabs>
    </Paper>
  );
}

export default Header;
