import React, {
  FunctionComponent,
  useState,
  KeyboardEvent,
  memo,
  ReactElement
} from 'react';
import classnames from 'classnames';
import * as styles from './InputText.scss';

const InputText: FunctionComponent<{
  onEnter: (e: KeyboardEvent, value: string) => void;
  placeholder: string;
  className?: string;
  icon?: ReactElement<{}>;
}> = ({ onEnter, placeholder, className = '', icon }) => {
  const [value, setValue] = useState('');

  return (
    <div className={classnames(styles.inputWrapper, className)}>
      {icon}

      <input
        type="text"
        value={value}
        onKeyPress={e => onEnter(e, value)}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(InputText);
