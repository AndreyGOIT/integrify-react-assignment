// import styles from './Home.module.css';
// import FetchCountries from '../../components/FetchCountries/FetchCountries';
import { PaginatedItems } from 'components/PaginatedItems/PaginatedItems';

export const Home = () => {
  return (
    <main>
      {/* <div className={styles.bar}>
        <p className={styles.barText}>Country</p>
        <input type="text" placeholder="Search by counrty name" />
      </div> */}
      {/* <div id="container">
        <FetchCountries />
      </div> */}
      <PaginatedItems itemsPerPage={5} />,
    </main>
  );
};
