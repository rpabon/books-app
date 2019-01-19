import { combineReducers } from 'redux';
import bookList from './book-list';
import book from './book';

export default combineReducers({
  bookList,
  book
});
