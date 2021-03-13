import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SchoolIcon from "@material-ui/icons/School";
import { ModaData } from "../../utils/types";

const useStyles = makeStyles({
  paper: {
    position: "absolute",
    top: "60%",
    left: "50%",
    width: "400px",
    backgroundColor: "#fff",
    border: "2px solid lightgray",
    padding: "20px 30px 20px 20px",
    transform: `translate(-50%, -50%)`,
  },
  header: { display: "flex" },
  title: {
    margin: "0 0 0 10px",
    color: "#5b5656",
  },
  content: {
    padding: "0 0 0 34px",
    margin: 0,
    listStyle: "none",
  },
  accent: {
    fontWeight: "bold",
    color: "#5b5656",
    marginRight: "5px",
  },
  item: {
    margin: "10px 0 10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5",
    transitionDuration: "0.6s",
    "&:hover": {
      color: "#212121",
    },
  },
});

function RatingMapModal(props: { handleModal: () => void; data: ModaData }) {
  const classes = useStyles();
  const open = props.data.title ? true : false;

  return (
    <Modal
      open={open}
      onClose={props.handleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <header className={classes.header}>
          <SchoolIcon color={"disabled"} />
          <h3 id="simple-modal-title" className={classes.title}>
            {props.data.title}
          </h3>
        </header>
        <ul className={classes.content}>
          <li id="simple-modal-description" className={classes.item}>
            <span className={classes.accent}>рейтинг:</span> {props.data.rate}
          </li>
          <li id="simple-modal-description" className={classes.item}>
            <span className={classes.accent}>адрес:</span> {props.data.adress}
          </li>
          <li id="simple-modal-description" className={classes.item}>
            <span className={classes.accent}>сайт:</span>
            <a href={props.data.url} target="__blank" className={classes.link}>
              {props.data.url}
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default RatingMapModal;
