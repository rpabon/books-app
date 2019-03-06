import React, { useContext, KeyboardEvent, FunctionComponent } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import content from '../../content';
import { getBookList } from '../../store/actions';
import { History } from 'history';
import * as styles from './Header.scss';
import InputText from '../InputText/InputText';
import '../../assets/search.svg';

const SearchInput: FunctionComponent<{
  history: History;
  getBookList: (value: string) => {};
}> = ({ history, getBookList }) => {
  const onEnter = ({ key }: KeyboardEvent, value: string) => {
    if (key === 'Enter' && value) {
      getBookList(value);
      history.push('/');
    }
  };

  return (
    <InputText
      onEnter={onEnter}
      placeholder={content.searchBarInputPlaceholder}
      className={styles.inputText}
      icon={
        <svg className={styles.searchIcon}>
          <use xlinkHref={`/sprite.svg#search`} />
        </svg>
      }
    />
  );
};

export default connect(
  null,
  { getBookList }
)(withRouter(SearchInput));
