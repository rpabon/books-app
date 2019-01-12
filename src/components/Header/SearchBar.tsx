import React, { useContext, KeyboardEvent, FunctionComponent } from 'react';
import { withRouter } from 'react-router';
import content from '../../content';
import { getBookList } from '../../store/actions';
import { BookListContext } from '../../store/contexts';
import { History } from 'history';
import * as styles from './Header.scss';
import InputText from '../InputText/InputText';

const SearchInput: FunctionComponent<{ history: History }> = ({ history }) => {
  const { dispatch } = useContext(BookListContext);

  const onEnter = ({ key }: KeyboardEvent, value: string) => {
    if (key === 'Enter' && value) {
      getBookList(dispatch, value);
      history.push('/');
    }
  };

  return (
    <InputText
      onEnter={onEnter}
      placeholder={content.searchBarInputPlaceholder}
      className={styles.inputText}
    />
  );
};

export default withRouter(SearchInput);
