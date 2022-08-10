import React, { useState } from "react";

const useToggle = (initialValue=false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue((val) => !val);
  };

  return { toggle, value };
};


export default useToggle;