'use client';

import { useState, type FC } from 'react';
import './CustomSelect.scss';
import Select, { SingleValue } from 'react-select';

interface SelectOptions {
  value: string;
  label: string;
}

export const CustomSelect: FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('ETH');
  const options: SelectOptions[] = [
    {
      value: 'ETH',
      label: 'ETH'
    },
    {
      value: 'BIT',
      label: 'BIT'
    },
    {
      value: 'COL',
      label: 'COL'
    }
  ];

  const getValue = () => {
    return options.find(option => option.value === currentValue) || null;
  };

  const onChange = (newValue: SingleValue<SelectOptions>) => {
    if (newValue) {
      setCurrentValue(newValue.value);
    } else {
      setCurrentValue('');
    }
  };

  return (
    <div className="container">
      <Select
        classNamePrefix="custom__select"
        onChange={onChange}
        value={getValue()}
        options={options}
        theme={theme => ({
          ...theme
        })}
      />
    </div>
  );
};
