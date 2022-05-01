import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <p>Capital : {country.capital}</p>
        <p>Population : {country.population.toLocaleString()} inhabitants</p>
        <p>Continent : {country.continents}</p>
      </div>
    </li>
  );
};

export default Card;
