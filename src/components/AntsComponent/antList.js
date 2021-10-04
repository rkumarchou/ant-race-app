import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Calculation from "../calculation";

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "10px",
    marginBottom: "2%",
  },
  typo: {
    fontSize: "1.5rem",
  },
});

const AntList = ({ getAnts }) => {
  const classes = useStyles();
  const { ants } = useSelector((state) => state);
  const { antList, status } = ants;
  const sortedList = antList.sort((a, b) => b.calculation - a.calculation);

  return (
    <div data-testid="tree-item">
      <h4>List of ants</h4>
      <Container>
        <Grid container>
          {sortedList.map((ant, antIndex) => (
            <Grid
              key={ant.name + ant.color}
              item
              xs={12}
              md={6}
              lg={4}
              className={classes.gridContainer}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/ant.jpg"
                  alt="ant image"
                />
                <CardContent>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {ant.name}
                  </Typography>
                  <Typography variant="body2">
                    {ant.color}
                    <br />
                  </Typography>
                  <Typography variant="body2">
                    {ant.weight}
                    <br />
                  </Typography>
                  <Typography variant="body2">
                    {ant.length}
                    <br />
                  </Typography>
                  <Typography variant="body2" className={classes.typo}>
                    {ant.status}
                    <br />
                  </Typography>
                  {status !== "not yet run" && (
                    <Calculation ant={ant} index={antIndex} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AntList;
