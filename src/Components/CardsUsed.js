import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from 'classnames';
import './Card.css'
const CardsUsed = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return "Loading..";

  return (
    <div>
      <Grid container spacing={3} justify="center">
        <Grid xs={12} md={3} item component={Card} className={cx('test','infected')}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected{" "}
            </Typography>

            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              no of active cases of covid 19
            </Typography>
          </CardContent>
        </Grid>

        <Grid xs={12} md={3} item component={Card} className={cx('test','recovered')}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered{" "}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              no of recovered cases of covid 19
            </Typography>
          </CardContent>
        </Grid>

        <Grid xs={12} md={3} item component={Card} className={cx('test','death')}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths{" "}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              no of death cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardsUsed;
