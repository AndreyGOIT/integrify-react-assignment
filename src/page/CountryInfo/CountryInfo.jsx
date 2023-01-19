import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneLand } from '../../services/eventsApi';
import styles from './CountryInfo.module.css';

export function CountryInfo() {
  const { name } = useParams();
  const [land, setLand] = useState(null);

  useEffect(() => {
    fetchOneLand(name).then(setLand);
  }, [name]);
  console.log(land);

  if (!land) return;
  const {
    capital,
    area,
    continents,
    flags = {},
    languages = {},
    population,
    coatOfArms = {},
  } = land[0];
  return (
    <>
      {/* <div>Now showing product with name - {name}</div> */}
      <div className={styles.countryInfoWrapper}>
        <div className={styles.topBlock}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <div className={styles.countryInfo}>
          <img
            src={flags.png}
            alt={name}
            width={'280'}
            height={'180'}
            className={styles.flag}
          />
          <div>
            <p>Capital: {capital}</p>
            <p>Area: {area} sq. km</p>
            <p>Languages: {Object.values(languages).join(', ')}</p>
            <p>Population: {population}</p>
            {/* <p>Currencies: {Object.values(currencies).join(', ')}</p> */}
            <p>Continents: {continents}</p>
          </div>
          <img src={coatOfArms.png} alt={name} width={'180'} height={'180'} />
        </div>
      </div>
    </>
  );
}
