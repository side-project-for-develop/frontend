import React from "react";
type ButtonType = "red" | "yellow" | "white";

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  disabled?: boolean;
  width?: string;
  height?: string;
  border?: string;
  round?: string;
  margin?: string;
}

const BUTTON_CLASSES = {
  red: "flex items-center justify-centerbg-[#F52E2E] text-white xxsm:text-[16px]",
  yellow: "flex items-center justify-center bg-[#EDF117] xxsm:text-[14px]",
  white:
    "flex items-center justify-center bg-white text-[#DF7272] font-semibold xsm:h-8",
};

export const Button = ({
  children,
  margin = "",
  type = "red",
  width = "w-full",
  height = "h-14",
  border = "border-none",
  round = "rounded-lg",
  disabled = false,
}: ButtonProps) => {
  const className = BUTTON_CLASSES[type] ?? "";
  return (
    <button
      className={`${className} ${width} ${height} ${border} ${round} ${margin}`}
      disabled={disabled}
    >
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
