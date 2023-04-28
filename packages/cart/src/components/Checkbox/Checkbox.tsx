import { PropsWithChildren, useState } from 'react';
import checkImage from '../../assets/check.svg';

type Props = PropsWithChildren<{
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  isDefaultChecked?: boolean;
}>;

export default function Checkbox({
  isChecked = false,
  isDefaultChecked = false,
  children,
  onChange,
  ...props
}: Props) {
  const [defaultChecked, setDefaultChecked] = useState(isDefaultChecked);

  return (
    <label
      htmlFor="checkbox"
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
      onClick={e => {
        if (onChange) return;

        e.preventDefault();
        setDefaultChecked(prev => !prev);
      }}
    >
      <input
        id="checkbox"
        checked={onChange ? isChecked : undefined}
        defaultChecked={!onChange ? defaultChecked : undefined}
        onChange={onChange}
        type="checkbox"
        style={{
          border: '0px',
          clip: 'rect(0px, 0px, 0px, 0px)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute'
        }}
        {...props}
      />
      <span
        style={{
          backgroundColor: `${
            onChange ? (isChecked ? '#317172' : 'white') : defaultChecked ? '#317172' : 'white'
          }`,
          width: '24px',
          height: '24px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '3px',
          border: '1px solid #95B7B8'
        }}
      >
        <img src={checkImage} />
      </span>
      {children}
    </label>
  );
}
