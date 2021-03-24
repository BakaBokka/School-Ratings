import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import RatingTable from "../RatingTable/RatingTable";
import RatingMap from "../RatingMap/RatingMap";

import { Data } from "../../utils/types";

const useStyles = makeStyles({
  mapContainer: {
    width: "50%",
    height: "calc(50vw/1.33)",
    margin: "30px",
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
});

function MoscowPage(props: { data: Data }) {
  const classes = useStyles();

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
    <>
      <Typography variant="h4" component="h2" className={classes.title}>
        Питера за 2020 год
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
    </>
  );
}

export default MoscowPage;
