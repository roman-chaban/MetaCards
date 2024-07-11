import React, { ChangeEvent, FC } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  id: string;
  options: Option[];
  selectedValue: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  ariaLabel: string;
  classNames: {
    select: string;
    option: string;
    selectContainer?: string;
  };
}

export const Select: FC<SelectProps> = ({
  name,
  id,
  options,
  selectedValue,
  onChange,
  ariaLabel,
  classNames
}) => {
  return (
    <select
      className={classNames.select}
      name={name}
      id={id}
      value={selectedValue}
      onChange={onChange}
      aria-label={ariaLabel}
    >
      {options.map(option => (
        <option
          className={classNames.option}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
