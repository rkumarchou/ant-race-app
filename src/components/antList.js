import React from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
} from "@material-ui/core";

function AntList({ getAnts }) {
  const data = useSelector((state) => state.ants.antList);
  console.log("data", data);
  // const { loading, error, data } = useQuery(getAnts);
  // console.log("fhsjfhj", data);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h4>List of ants will be displayed here</h4>
      <Container>
        <Grid container>
          {data.map((ant) => (
            <Grid item xs={12} md={6} lg={4}>
              <Card xs={4}>
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
                  <Typography variant="body2">
                    {ant.status}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AntList;
