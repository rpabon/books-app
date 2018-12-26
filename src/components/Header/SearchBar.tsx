import React, { useState, useContext, KeyboardEvent, SFC } from 'react';
import { withRouter } from 'react-router';
import { getBookList } from '../../store/actions';
import { BookListContext } from '../../store/contexts';

const SearchInput: SFC<{}> = ({ history }) => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(BookListContext);

  const onEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter' && value) {
      getBookList(dispatch, value);
      history.push('/');
    }
  };

  return (
    <input
      type="text"
      onKeyPress={e => onEnter(e)}
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
};

export default withRouter(SearchInput);
