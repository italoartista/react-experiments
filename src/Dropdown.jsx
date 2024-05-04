import React, { useState } from 'react';


let style = { 
       color: 'magenta',
       fontSize: '20px'

}
function Dropdown({ paises, cidades }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); 

  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
  }
  function handleCityChange(e) {
    setSelectedCity(e.target.value);
  }

  return (
    <>
        <label htmlFor="dropdown">Selecione o pais:</label>
        <select name="pais" id="pais" onChange={handleCountryChange}>
            {paises.map((pais, index) => (
                <option key={index} value={pais}>{pais}</option>
            ))}
        </select>
        <select name="cidade" id="cidade" onChange={handleCityChange}>
                {
                    cidades.map((cidade, index) => (
                        <option key={index} value={cidade}>{cidade}</option>
                    ))
                }
        </select>
        <h1 style={style}>
            O país selecionado foi:
            <strong style={{color: 'green', marginLeft: '5px'}}>{selectedCountry}</strong>
            <br />
            A cidade selecionada foi:
            <strong style={{color: 'red', marginLeft: '5px'}}>{selectedCity}</strong>
        </h1>
    </>
  );
}

export default Dropdown;