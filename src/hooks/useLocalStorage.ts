import { Dispatch, SetStateAction, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  startValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [sortedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : startValue;
  });
  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(sortedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [sortedValue, setValue];
}
