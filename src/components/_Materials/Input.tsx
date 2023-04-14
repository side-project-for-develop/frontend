import React from "react";

type InputType = "main" | "sub";

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: InputType;
  width?: string;
  height?: string;
  type: string;
  round?: string;
  border?: string;
  focus?: string;
}

const INPUT_CLASSES = {
  main: "h-14 text-sm pl-3 xxsm:text-[11px]",
  sub: "text-sm pl-3 xsm:h-10 xxsm:text-[11px]",
};

export const Input = ({
  placeholder,
  onChange,
  type,
  focus = "focus:outline-red-500",
  border = "border border-gray-300",
  round = "rounded-t-lg rounded-b-lg",
  width = "w-full",
  height = "",
  style = "main",
}: InputProps) => {
  const className = INPUT_CLASSES[style] ?? "";
  return (
    <input
      type={type}
      className={`${className} ${width} ${height} ${round} ${border} ${focus}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
