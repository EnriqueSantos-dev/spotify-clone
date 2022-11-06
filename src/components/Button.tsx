import clsx from "clsx";
import React from "react";

interface PropsButtonIcon
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function ButtonIcon({ children }: PropsButtonIcon) {
  return (
    <span className="flex h-full items-center justify-center text-white">
      {children}
    </span>
  );
}

interface PropsButtonText {
  children?: React.ReactNode;
  className?: string;
}

function ButtonText({ children, className }: PropsButtonText) {
  return <p className={`uppercase font-bold ${className}`}>{children}</p>;
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  bg?: string;
  variant: "fill" | "outline";
  className?: string;
}

function ButtonRoot({
  variant,
  children,
  bg,
  className,
  ...props
}: PropsButton) {
  const colorFormattedToClass = `bg-[${bg}]`;

  return (
    <button
      className={clsx(
        `${className} w-full flex justify-center items-center gap-x-[10px] border border-[#878787] hover:border-black rounded-[500px] py-3 px-[31px] transition-colors`
      )}
      {...props}
      style={{
        backgroundColor: variant === "outline" ? "transparent" : bg,
      }}
    >
      {children}
    </button>
  );
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};
