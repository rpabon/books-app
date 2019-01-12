import React, { FunctionComponent, useState, KeyboardEvent, memo } from 'react';
import classnames from 'classnames';
import * as styles from './InputText.scss';

const InputText: FunctionComponent<{
  onEnter: (e: KeyboardEvent, value: string) => void;
  placeholder: string;
  className?: string;
}> = ({ onEnter, placeholder, className = '' }) => {
  const [value, setValue] = useState('');

  return (
    <div className={classnames(styles.inputWrapper, className)}>
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
