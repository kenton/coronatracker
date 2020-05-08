import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardContainer = styled(Grid)`
  margin: 50px 0;
  display: flex;
`;

const InfectedGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0,0,0,0.5);
`;

const RecoveredGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0,255,0,0.5);
`;

const DeathsGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(255,0,0,0.5);
`;

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <CardContainer>
      <InfectedGrid item component={Card}>
        <Grid>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={confirmed.value} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </Grid>
      </InfectedGrid>

      <RecoveredGrid item component={Card}>
        <Grid>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
        </Grid>
      </RecoveredGrid>

      <DeathsGrid item component={Card}>
          <Grid>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths from COVID-19</Typography>
          </Grid>
        </DeathsGrid>
    </CardContainer>
  )
}

export default Cards;
