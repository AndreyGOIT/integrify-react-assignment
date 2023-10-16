import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';
import styles from './PaginatedItems.module.css';
import { fetchCountries } from 'services/eventsApi';

export const PaginatedItems = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const items = await fetchCountries();
      setPageCount(Math.ceil(items.length / itemsPerPage));
      setCurrentItems(items.slice(itemOffset, itemOffset + itemsPerPage));
    }

    fetchData();
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = event => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

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
      <div className={styles.paginationContainer}>
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
      </div>
    </>
  );
};
