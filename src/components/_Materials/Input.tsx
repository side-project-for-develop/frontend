import React from "react";

type InputType = "main" | "sub";

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: InputType;
  width?: string;
  height?: string;
  type: string;
}

const INPUT_CLASSES = {
  main: "h-14 rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500",
  sub: "rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500 xsm:h-10 xxsm:text-[11px]",
};

export const Input = ({
  placeholder,
  onChange,
  type,
  width = "w-full",
  height = "",
  style = "main",
}: InputProps) => {
  const className = INPUT_CLASSES[style] ?? "";
  return (
    <input
      type={type}
      className={`${className} ${width} ${height}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
