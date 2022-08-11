/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const FormSelectComponent: React.FC = React.memo(() => {
  return (
    <select
      className="form-select m-0
    block
    w-full
    appearance-none
    rounded
    border
    border-solid
    border-gray-300
    bg-white bg-clip-padding bg-no-repeat
    px-3 py-[17px] text-base
    font-normal
    text-gray-700
    transition
    ease-in-out
    focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      aria-label="Default select example"
    >
      <option selected className="">
        July 2022 <BsChevronDown size={25}/>{" "}
      </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
});

export default FormSelectComponent;
