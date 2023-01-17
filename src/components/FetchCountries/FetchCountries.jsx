import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { fetchCountries } from 'services/eventsApi';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './FetchCountries.module.css';

export default function FetchCountries() {
  const [countries, setCountries] = useState(null);
  const location = useLocation;

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);
  console.log(countries);

  return (
    <>
      {countries && (
        <>
          <div className={styles.topRow}>
            <p>Flag</p>
            <p>Name</p>
            <p>Region</p>
            <p>Population</p>
            <p>Languages</p>
          </div>
          <hr />
          <ul className={styles.list}>
            {countries.map(
              ({ area, name, region, population, flags, languages }) => (
                <li key={area + population} className={styles.listItem}>
                  <img
                    src={flags.png}
                    alt={name.common}
                    width={'80'}
                    height={'80'}
                  />
                  <p>{name.common}</p>
                  <p>{region}</p>
                  <p>{population}</p>
                  <p>List of languages</p>
                  <Link to={`/country/name`} state={location.state}>
                    arrow
                  </Link>
                </li>
                // <li className={styles.listItem} key={index.toString()}>
                //   <Link
                //     to={`/movies/${id}`}
                //     state={location.state}
                //     className={styles.link}
                //   >
                //     {title}
                //   </Link>
                // </li>
              )
            )}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
}
