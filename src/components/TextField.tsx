import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextField({ ...props }: Props) {
  return (
    <input
      {...props}
      className="w-full border p-[14px] border-black rounded bg-transparent focus:outline-2 text-black placeholder-[#878787]"
    />
  );
}

export default TextField;
