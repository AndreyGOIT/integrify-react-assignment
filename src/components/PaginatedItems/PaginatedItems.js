import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';
import styles from './PaginatedItems.module.css';
import { fetchCountries } from 'services/eventsApi';

function FetchCountries() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);
  console.log(countries);
  return countries;
}
const items = FetchCountries();

function Items({ currentItems }) {
  const location = useLocation();
  return (
    <>
      {currentItems && (
        <>
          <div className={styles.tableHeadWrapper}>
            <table className={styles.equalWidthCols}>
              <tr>
                <td>Flag</td>
                <td>Name</td>
                <td>Region</td>
                <td>Population</td>
                <td>Languages</td>
                <td>Link</td>
              </tr>
            </table>
          </div>
          <hr />
          {currentItems.map(
            ({ flag, name, region, population, flags, languages = {} }) => (
              <div className={styles.tableWrapper}>
                <table className={styles.equalWidthCols}>
                  <tr>
                    <td>
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
                      >
                        {flag}
                      </Link>
                    </td>
                  </tr>
                </table>
                {/* <hr /> */}
              </div>
            )
          )}
        </>
      )}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// ReactDOM.render(
//   <PaginatedItems itemsPerPage={5} />,
//   document.getElementById('container')
// );
