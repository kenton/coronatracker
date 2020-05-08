import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchDailyData } from '../../api/';
import { Line, Bar } from 'react-chartjs-2';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
`;

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(()=> {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  });

  const lineChart = (
    dailyData.length !== 0 ?
    (
      <Line
        data ={{
          labels: dailyData.map(({date}) => date),
          datasets: [
            {
              data: dailyData.map(({confirmed}) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            },
            {
              data: dailyData.map(({recovered}) => recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true
            },
            {
              data: dailyData.map(({deaths}) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            }
          ],
        }}
      />
    ) : null
  );

  return (
    <ChartContainer>
      {lineChart}
    </ChartContainer>
  )
}

export default Chart;
