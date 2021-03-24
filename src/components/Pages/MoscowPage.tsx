import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import RatingTable from "../RatingTable/RatingTable";
import RatingMap from "../RatingMap/RatingMap";
import { Data, School } from "../../utils/types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import star from "../../img/star.png";
import school from "../../img/school.png";
import branch from "../../img/branch.png";

const useStyles = makeStyles({
  mapContainer: {
    width: "50%",
    height: "calc(50vw/1.33)",
    margin: "0 30px 30px",
    position: "relative",
  },
  title: {
    color: "#4f4f4f",
    marginBottom: "30px",
    fontSize: "36px",
  },
  container: {
    maxWidth: "90%",
    width: "100%",
    display: "flex",
    margin: "20px 0 30px",
  },
  subtitle: {
    maxWidth: "40%",
    width: "100%",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5",
    transitionDuration: "0.6s",
    "&:hover": {
      color: "#212121",
    },
    marginLeft: "5px",
  },
  legend: {
    maxWidth: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0 0"

  },
  legendItem: {
    width: "25%"
  },
  legendText: {
    margin: "0 0 0 10px"
  }
});

function MoscowPage(props: { data: Data }) {
  const classes = useStyles();
  const [filteredRows, setFilteredRows] = useState<School[]>([]);
  const [schoolsOnMap, setSchoolsOnMap] = useState<number>(10);

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

  console.log(filteredRows);
  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>
        Москвы за 2020 год
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Основано на рейтинге школ от
        <a
          className={classes.link}
          href="https://www.mos.ru/donm/documents/metodicheskie-rekomendacii/view/229422220/"
          target="__blank"
        >
          Департамента образования Москвы
        </a>
      </Typography>

      <Box component="div" className={classes.container}></Box>

      <RatingTable
        columns={columns}
        data={rows}
        setFilteredRows={setFilteredRows}
        setSchoolsOnMap={setSchoolsOnMap}
      />
      <List className={classes.legend}>
        <ListItem className={classes.legendItem}>
          <img src={star} alt="Иконка топ20" />
          <ListItemText primary="  школа из топ-20" className={classes.legendText}/>
        </ListItem>
        <ListItem className={classes.legendItem}>
          <img src={school} alt="Иконка школы" />
          <ListItemText primary="  школа из топ-100" className={classes.legendText}/>
        </ListItem>
        <ListItem className={classes.legendItem}>
          <img src={branch} alt="Иконка филиала" />
          <ListItemText primary="  филиал школы"  className={classes.legendText}/>
        </ListItem>
      </List>

      <div className={classes.mapContainer}>
        <RatingMap data={filteredRows.slice(0, schoolsOnMap)} />
      </div>
    </>
  );
}

export default MoscowPage;
