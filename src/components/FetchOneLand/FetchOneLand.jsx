import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchLandByName } from '../../services/eventsApi';
import styles from './FetchOneLand.module.css';

export function FetchOneLand() {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('countryname');

  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') return;

    async function fetchEvent() {
      const data = await fetchLandByName(query);
      console.log(data);

      setEvents(data);
    }
    fetchEvent();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ countryname: form.elements.query.value });
    console.log(query);
    form.reset();
  };
  console.log(searchParams);
  return (
    <>
      <div className={styles.section}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Search by country name"
          ></input>
        </form>
        {events && (
          <div>
            <ol>
              {events.map(({ name, area, population, flag }) => (
                <li key={area + population}>
                  <div className={styles.listItem}>
                    <Link
                      to={`/country/${name.common}`}
                      state={location.state}
                      className={styles.countryLink}
                    >
                      {name.common}
                    </Link>
                    <p className={styles.flag}>{flag}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Outlet />
          </div>
        )}
      </div>

      {/* <div>
        <p>{land.name}</p>
        <img
          src={land.flags.png}
          alt={land.name.common}
          width={'180'}
          height={'180'}
        />
      </div> */}
    </>
  );
}
