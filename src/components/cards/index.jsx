import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0;

  @media 770px {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const InfectedGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0,0,0,0.5);

  @media 770px {
    margin: 2% 0 !important;
  }
`;

const RecoveredGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(0,255,0,0.5);

  @media 770px {
    margin: 2% 0 !important;
  }
`;

const DeathsGrid = styled(CardContent)`
  margin: 0 2% !important;
  border-bottom: 10px solid rgba(255,0,0,0.5);

  @media 770px {
    margin: 2% 0 !important;
  }
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
