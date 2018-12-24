import React, { useState, useContext, memo, KeyboardEvent, SFC } from 'react';
import { getBookList } from '../../actions';
import { BookListContext } from '../../contexts';

const SearchInput: SFC<{}> = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(BookListContext);

  const onEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter' && value) {
      getBookList(dispatch, value);
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

export default memo(SearchInput);
