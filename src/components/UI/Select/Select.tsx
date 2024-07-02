import type { ChangeEvent, FC } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  name: string
  id: string
  options: Option[]
  selectedValue: string
  onChange: (value: string) => void
  ariaLabel: string
  classNames: {
    select: string
    option: string
  }
}

export const Select: FC<SelectProps> = ({
  id,
  name,
  selectedValue,
  ariaLabel,
  onChange,
  options,
  classNames
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }
  return (
    <select
      className={classNames.select}
      name={name}
      id={id}
      value={selectedValue}
      onChange={handleChange}
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
  )
}
