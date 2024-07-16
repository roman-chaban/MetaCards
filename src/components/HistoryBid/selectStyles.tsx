export interface CustomStyles {
  control: (baseStyles: any, state: { isFocused: boolean }) => any;
  singleValue: (baseStyles: any) => any;
  option: (
    baseStyles: any,
    state: { isFocused: boolean; isSelected: boolean }
  ) => any;
  container: (provided: any) => {};
}

export const customStyles: CustomStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '14px',
    background: 'none',
    border: 'none',
    appearance: 'none',
    borderColor: state.isFocused ? '#color-focus' : '#color-normal',
    boxShadow: state.isFocused ? '0 0 0 1px #color-focus' : 'none'
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    color: '#color-button-bg'
  }),
  option: (baseStyles, { isFocused, isSelected }) => ({
    ...baseStyles,
    backgroundColor: isFocused
      ? '#color-focus'
      : isSelected
        ? '#color-selected'
        : 'transparent',
    color: isSelected ? '#141416' : '#141416',
    cursor: 'pointer'
  }),
  container: provided => ({
    ...provided,
    appearance: 'none',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  })
};
