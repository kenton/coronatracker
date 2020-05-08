import React from 'react';
import {Cards, Chart, CountryPicker } from './components'
import styled from 'styled-components';
import { fetchData } from './api/';
import image from './images/logo.jpg';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 370px;
  margin-top: 50px;
`;
export default class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    console.log(country);
  }

  render() {
    const { data } = this.state;

    return (
      <AppContainer>
        <BannerImage src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </AppContainer>
    )
  }
}
