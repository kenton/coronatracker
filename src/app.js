import React from 'react';
import {Cards, Chart, CountryPicker } from './components'
import styled from 'styled-components';
import { fetchData } from './api/';


const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  render() {
    const { data } = this.state;

    return (
      <AppContainer>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </AppContainer>
    )
  }
}
