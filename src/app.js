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

  @media 770px {
    margin: 0 10%;
  }
`;

const BannerImage = styled.img`
  width: 370px;
  margin-top: 50px;

  @media 770px {
    width: 100%
  }
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
    if (country) {
      const countryData = await fetchData(country);
      this.setState({data: countryData, country: country});
    } else {
      const countryData = await fetchData();
      this.setState({data: countryData, country: ''});
    }
  }

  render() {
    const { data, country } = this.state;

    return (
      <AppContainer>
        <BannerImage src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </AppContainer>
    )
  }
}
