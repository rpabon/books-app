import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import { getBookList, getBookByUrl } from './store/actions';
import { Dispatch } from 'redux';
import { DEFAULT_BOOK_LIST_QUERY } from './server/middleware/constants';

export default [
  {
    path: '/',
    component: BookList,
    exact: true,
    loadAction: () => (dispatch: Dispatch) =>
      dispatch(getBookList(DEFAULT_BOOK_LIST_QUERY))
  },
  {
    path: '/book/:id',
    component: Book,
    loadAction: getBookByUrl
  }
];
