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
}

const INPUT_CLASSES = {
  main: "h-14 text-sm pl-3 focus:outline-red-500",
  sub: "text-sm pl-3 focus:outline-red-500 xsm:h-10 xxsm:text-[11px]",
};

export const Input = ({
  placeholder,
  onChange,
  type,
  border = "border border-gray-300",
  round = "rounded-lg",
  width = "w-full",
  height = "",
  style = "main",
}: InputProps) => {
  const className = INPUT_CLASSES[style] ?? "";
  return (
    <input
      type={type}
      className={`${className} ${width} ${height} ${round} ${border}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
