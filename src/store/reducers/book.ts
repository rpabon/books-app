import { StoreAction, BookState } from '../../interfaces';
import { BOOK_PENDING, BOOK_SUCCESS, BOOK_ERROR } from '../constants';

export const bookInitialState: () => BookState = () => ({
  pending: false,
  id: 0,
  title: '',
  isbn: 0,
  image_url: '',
  small_image_url: '',
  year: new Date().getFullYear(),
  description: '',
  rating: 0,
  pages: 0,
  author_id: 0,
  author: '',
  author_image_url: ''
});

export default (state = bookInitialState(), action: StoreAction) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_PENDING:
      return {
        ...state,
        pending: true
      };

    case BOOK_SUCCESS:
      return {
        ...state,
        ...payload,
        pending: false
      };

    case BOOK_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
