import styles from './Home.module.css';
import FetchCountries from '../components/FetchCountries/FetchCountries';

export const Home = () => {
  return (
    <main>
      <div className={styles.bar}>
        <p className={styles.barText}>Country</p>
        <input type="text" placeholder="Search by counrty name" />
      </div>
      <div>
        <FetchCountries />
      </div>
      {/* <h1>Welcome</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p> */}
    </main>
  );
};
