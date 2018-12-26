import { StoreAction, BookListState } from '../../interfaces';
import {
  BOOK_LIST_PENDING,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_ERROR
} from '../constants';

export const bookListInitialState = {
  pending: false,
  list: []
};

export const bookListReducer = (state: BookListState, action: StoreAction) => {
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
