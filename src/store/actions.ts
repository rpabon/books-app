import axios from 'axios';
import { DispatchAction } from '../interfaces';
import {
  BOOK_LIST_PENDING,
  BOOK_LIST_SUCCESS,
  BOOK_PENDING,
  BOOK_SUCCESS
} from './constants';

export const getBookList = (dispatch: DispatchAction, value: string) => {
  dispatch({ type: BOOK_LIST_PENDING });

  return axios
    .get(`/fetch-books?q=${value}`)
    .then(({ data }: any) =>
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data.books })
    );
};

export const getBook = (dispatch: DispatchAction, url: string) => {
  dispatch({ type: BOOK_PENDING });

  const id = url.replace('book/', '');

  return axios.get(`/fetch-book?id=${id}`).then(({ data }: any) => {
    console.log(data.raw, data.book);
    dispatch({ type: BOOK_SUCCESS, payload: data.book });
  });
};
