import BookList from './components/BookList';
import Book from './components/Book';

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
