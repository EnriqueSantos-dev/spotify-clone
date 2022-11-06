import clsx from "clsx";
import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  listOptions: string[];
  error?: string;
}

function Select({ listOptions, error, ...props }: Props) {
  return (
    <select
      placeholder="Mês"
      {...props}
      className={clsx(
        "w-full border p-[14px] rounded bg-transparent focus:outline-2 text-black ",
        {
          "border-red-500": error,
          "border-black": !error,
        }
      )}
    >
      <option value="" selected hidden className="text-[#878787]">
        Mês
      </option>
      {listOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
