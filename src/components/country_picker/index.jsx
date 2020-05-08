import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPickerForm = styled(FormControl)`
`;

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setCountries]);

  return (
    <CountryPickerForm>
      <NativeSelect>
        <option value="global">Global</option>
        {
          countries.map((country, index) => {
            return <option key={index} value={country.toLowerCase()}>{country}</option>
          })
        }

      </NativeSelect>
    </CountryPickerForm>
  )
}

export default CountryPicker;
