import { useState, useEffect } from 'react';
import { fetchCountries } from 'services/eventsApi';
// import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './FetchCountries.module.css';
import { Link } from 'react-router-dom';

export default function FetchCountries() {
  // const keyAPI = '1eb36deae800d0e3d9fd1b0466458d26';
  // const url = 'https://api.themoviedb.org/3/movie/';
  const [countries, setCountries] = useState(null);
  //   const location = useLocation;

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);
  console.log(countries);

  return (
    <>
      {countries && (
        <>
          <ul>
            {countries.map(({ area, flag, region, population }) => (
              <li key={area + population} className={styles.listItem}>
                <p>{flag}</p>
                <p>{region}</p>
                <p>{population}</p>
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
            ))}
          </ul>
          {/* <Outlet /> */}
        </>
      )}
    </>
  );
}
