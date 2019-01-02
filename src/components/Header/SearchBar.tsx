import React, {
  useState,
  useContext,
  KeyboardEvent,
  FunctionComponent
} from 'react';
import { withRouter } from 'react-router';
import { getBookList } from '../../store/actions';
import { BookListContext } from '../../store/contexts';
import { History } from 'history';
import * as styles from './Header.scss';

const SearchInput: FunctionComponent<{ history: History }> = ({ history }) => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(BookListContext);

  const onEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter' && value) {
      getBookList(dispatch, value);
      history.push('/');
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        onKeyPress={e => onEnter(e)}
        onChange={e => setValue(e.target.value)}
        value={value}
        placeholder="Search for a book..."
      />
    </div>
  );
};

export default withRouter(SearchInput);
