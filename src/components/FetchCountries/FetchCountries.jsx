import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { fetchCountries } from 'services/eventsApi';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import styles from './FetchCountries.module.css';

export default function FetchCountries() {
  const [countries, setCountries] = useState(null);
  // const location = useLocation;

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);
  console.log(countries);

  const items = countries;
  return items;

  // return (
  //   <>
  //     {countries && (
  //       <>
  //         <div className={styles.tableHeadWrapper}>
  //           <table className={styles.equalWidthCols}>
  //             <tr>
  //               <td>Flag</td>
  //               <td>Name</td>
  //               <td>Region</td>
  //               <td>Population</td>
  //               <td>Languages</td>
  //               <td>Link</td>
  //             </tr>
  //           </table>
  //         </div>
  //         <hr />
  //         {countries.map(
  //           ({ flag, name, region, population, flags, languages = {} }) => (
  //             <div className={styles.tableWrapper}>
  //               <table className={styles.equalWidthCols}>
  //                 <tr>
  //                   <td>
  //                     <img
  //                       src={flags.png}
  //                       alt={name.common}
  //                       width={'80'}
  //                       height={'60'}
  //                     />
  //                   </td>
  //                   <td>{name.common}</td>
  //                   <td>{region}</td>
  //                   <td>{population}</td>
  //                   <td>{Object.values(languages).join(', ')}</td>
  //                   <td>
  //                     <Link
  //                       to={`/country/${name.common}`}
  //                       state={location.state}
  //                     >
  //                       {flag}
  //                     </Link>
  //                   </td>
  //                 </tr>
  //               </table>
  //               {/* <hr /> */}
  //             </div>
  //           )
  //         )}
  //         <Outlet />
  //       </>
  //     )}
  //   </>
  // );
}
