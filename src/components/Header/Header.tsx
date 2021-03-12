import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {TableType} from "../../utils/types";


const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "20px"
  },
});

 function Header(props: {setTableType: (tableType: TableType)=> void}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    console.log(newValue)
    if(newValue === 0) {
      props.setTableType("mos");
    } else if(newValue === 1) {
      props.setTableType("spb");
    } else  props.setTableType("ru");
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
        <Tab label="Школы Москвы" />
        <Tab label="Школы Питера" />
        <Tab label="Школы России" />
      </Tabs>
    </Paper>
  );

}

export default Header;