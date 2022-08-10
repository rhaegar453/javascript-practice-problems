import { useState } from "react";

const useLocalStorage = (key: any, initialValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      let value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  const setLSValue = (value: any) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  return [value, setLSValue];
};

export default useLocalStorage;
