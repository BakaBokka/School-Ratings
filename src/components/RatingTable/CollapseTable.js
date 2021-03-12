import {
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
});

function CollapseTable({ open, branches }) {
  const classes = useStyles();

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box className={classes.container}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className={classes.cell}>Филиал</TableCell>
              <TableCell>Адрес</TableCell>
              <TableCell>Округ</TableCell>
              <TableCell>Район</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches &&
              branches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell component="th" scope="row">
                    {branch.school}
                  </TableCell>
                  <TableCell>{branch.adress}</TableCell>
                  <TableCell>{branch.area}</TableCell>
                  <TableCell>{branch.district}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
}

export default CollapseTable;
