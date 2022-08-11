import React from "react";
import cn from "classnames";
import { FiSearch } from "react-icons/fi";

interface Props {}
const SearchInput: React.FC<Props> = React.memo(({}) => {
  return (
    <div className="relative flex w-full items-center rounded-md border-2 bg-white py-4 pr-2 text-base transition-all duration-200 focus-within:border-2 focus-within:border-primary">
      <input
        type="text"
        placeholder="enter keywords"
        className="w-full rounded-md pl-2 tracking-wider placeholder:font-light placeholder:lowercase placeholder:first-letter:uppercase focus:outline-none"
      />
      <button className="">
        <FiSearch className="text-[22px] text-gray-400" />
      </button>
    </div>
  );
});
export default SearchInput;
