import axios from 'axios';
import { Request } from 'express';
import { Dispatch } from 'redux';
import {
  BOOK_LIST_PENDING,
  BOOK_LIST_SUCCESS,
  BOOK_PENDING,
  BOOK_SUCCESS
} from './constants';
import { LOCAL_URL } from '../server/middleware/constants';

export const getBookList = (value: string) => (dispatch: Dispatch) => {
  dispatch({ type: BOOK_LIST_PENDING });

  return axios
    .get(`${LOCAL_URL}/fetch-books?q=${value}`)
    .then(({ data }: any) =>
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data.books })
    );
};

export const getBook = (id: number) => (dispatch: Dispatch) => {
  dispatch({ type: BOOK_PENDING });

  return axios
    .get(`${LOCAL_URL}/fetch-book?id=${id}`)
    .then(({ data }: any) =>
      dispatch({ type: BOOK_SUCCESS, payload: data.book })
    );
};

export const getBookByUrl = ({ params }: Request) => {
  const id = params[0].replace('book/', '');

  return getBook(Number(id));
};
