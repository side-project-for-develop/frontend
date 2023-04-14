import { useState, useEffect, ChangeEvent } from "react";

type Validator = (value: string) => boolean;

export const useInput = (
  initialState: string,
  validator: Validator
): [string, (event: ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [value, setValue] = useState<string>(initialState);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    setDisabled(!validator(value));
  }, [value, validator]);

  return [value, handleChange, disabled];
};
