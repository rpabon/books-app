import axios from 'axios';
import { DispatchAction } from '../interfaces';
import { BOOK_LIST_PENDING, BOOK_LIST_SUCCESS } from '../constants';

export const getBookList = (dispatch: DispatchAction, value: string) => {
  dispatch({ type: BOOK_LIST_PENDING });

  axios
    .get(`/books?q=${value}`)
    .then(({ data }: any) =>
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data.books })
    );
};
