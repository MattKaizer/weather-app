import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

//states
const [search, setSearch] = useState({
  city: '',
  country: ''
});
const [query, setQuery] = useState(false);
const [result, setResult] = useState({});
const [error, setError] = useState(false);

const { city, country } = search;

//effects
useEffect(() => {
  const getApi = async () => {
    const apiKey = 'f9a635f547496bbd645d4f08db5e98b2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    if (query) {
      const response = await fetch(url);
      const result = await response.json();
      setResult(result);
      setQuery(false)
    }
    //Detect error for not found values
    result.cod === "404" ? setError(true) : setError(false);
  }
  getApi()
  // eslint-disable-next-line
}, [query])

//Conditional components
let component;
if (error) {
  component = <Error message="No hay resultados"/>
} else {
  component = <Weather result={result} />
}

  return (
    <Fragment>
      <Header title="Kairos Weather App"/>
      <div className="valign-wrapper container-form">
      <div className="valign fullwidth">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
              search={search}
              setSearch={setSearch}
              setQuery={setQuery}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
