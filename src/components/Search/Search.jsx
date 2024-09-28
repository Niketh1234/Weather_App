import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoOptions, GEO_CITIES_URL } from '../../Api';
export function Search({ sendSearchData }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_CITIES_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    sendSearchData(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="search for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
