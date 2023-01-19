// import { Link } from './Navigation.styled';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <div className={styles.bar}>
          <p className={styles.barText}>Country</p>
          <input type="text" placeholder="Search by country name" />
        </div>
      </nav>
    </>
  );
}
