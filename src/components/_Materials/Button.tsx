import React from "react";
type ButtonType = "red" | "yellow";

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  disabled?: boolean;
  width?: string;
  height?: string;
}

const BUTTON_CLASSES = {
  red: "bg-[#F52E2E] rounded-lg text-white xxsm:text-[16px]",
  yellow: "bg-[#EDF117] rounded-lg xxsm:text-[14px]",
};

export const Button = ({
  children,
  type = "red",
  width = "w-full",
  height = "h-14",
  disabled = false,
}: ButtonProps) => {
  const className = BUTTON_CLASSES[type] ?? "";
  return (
    <button className={`${className} ${width} ${height}`} disabled={disabled}>
      {children}
    </button>
  );
};

export const FoldButton = ({
  children,
  type,
  width,
  height = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <Button type={type} disabled={disabled} width={width} height={height}>
      <span className="xxsm:text-[11px]">{children}</span>
    </Button>
  );
};
