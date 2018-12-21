import React, { Fragment, useState } from 'react';
import Loading from '../components/Loading';
import axios from 'axios';

export default () => {
  const [books, setBooks] = useState([]);

  return (
    <Fragment>
      <button
        type="button"
        onClick={() =>
          axios.get('/books').then(({ data }) => setBooks(data.books))
        }
      >
        Go!
      </button>

      {books.length > 0 ? (
        <ul>
          {books.map(({ best_book }) => {
            const { id, title, small_image_url } = best_book;

            return (
              <li key={id}>
                <img src={small_image_url} />
                {title}
              </li>
            );
          })}
        </ul>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};
