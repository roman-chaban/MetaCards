import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: string;
  name?: string;
  value: string;
  id?: string;
  className: string;
  placeholder: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}

export const Input: FC<InputProps> = ({
  id,
  name,
  setValue,
  type,
  value,
  className,
  placeholder,
  icon
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      id={id}
      name={name}
      value={value}
      onChange={setValue}
    />
  );
};
