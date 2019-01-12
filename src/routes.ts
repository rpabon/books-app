import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';

export default [
  {
    path: '/',
    component: BookList,
    exact: true
  },
  {
    path: '/book/:id',
    component: Book
  }
];
