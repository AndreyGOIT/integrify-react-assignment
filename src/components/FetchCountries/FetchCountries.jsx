import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { fetchCountries } from 'services/eventsApi';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './FetchCountries.module.css';

export default function FetchCountries() {
  const [countries, setCountries] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchCountries().then(data => setCountries(data));
  }, []);
  console.log(countries);

  // const items = countries;
  // return items;

  return (
    <>
      {countries && (
        <>
          <div className={styles.tableHeadWrapper}>
            <table className={styles.equalWidthCols}>
              <thead>
                <tr>
                  <th>Flag</th>
                  <th>Name</th>
                  <th>Region</th>
                  <th>Population</th>
                  <th>Languages</th>
                  <th>Link</th>
                </tr>
              </thead>
            </table>
          </div>
          {/* <hr /> */}
          {countries.map(
            ({
              area,
              flag,
              name,
              region,
              population,
              flags,
              languages = {},
            }) => (
              <div className={styles.tableWrapper} key={area + population}>
                <table className={styles.equalWidthCols}>
                  <tbody>
                    <tr>
                      <td className={styles.flagCell}>
                        <img
                          src={flags.png}
                          alt={name.common}
                          width={'80'}
                          height={'60'}
                        />
                      </td>
                      <td>{name.common}</td>
                      <td>{region}</td>
                      <td>{population}</td>
                      <td>{Object.values(languages).join(', ')}</td>
                      <td>
                        <Link
                          to={`/country/${name.common}`}
                          state={location.state}
                          className={styles.link}
                        >
                          {flag}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <hr /> */}
              </div>
            )
          )}
          <Outlet />
        </>
      )}
    </>
  );
}
