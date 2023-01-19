import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <div className={styles.bar}>
          <Link to="/" className={styles.homeLink}>
            Home
          </Link>
          {/* <p className={styles.barText}>Country</p> */}
          <input type="text" placeholder="Search by country name" />
        </div>
      </nav>
    </>
  );
}
