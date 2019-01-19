import { StoreAction, BookListState } from '../../interfaces';
import {
  BOOK_LIST_PENDING,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_ERROR
} from '../constants';

export const bookListInitialState: () => BookListState = () => ({
  pending: false,
  list: []
});

export default (state = bookListInitialState(), action: StoreAction) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_LIST_PENDING:
      return {
        ...state,
        pending: true
      };

    case BOOK_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        pending: false
      };

    case BOOK_LIST_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
