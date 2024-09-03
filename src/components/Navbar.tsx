import {
  CalendarIcon,
  CounterClockwiseClockIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#00193b] text-white w-full flex justify-center">
      <div className="flex space-x-3 p-2">
        <PersonIcon className="size-[30px] cursor-pointer hover:bg-[#00377e] rounded-full" />
        <StarIcon className="size-[30px] cursor-pointer hover:bg-[#00377e] rounded-full" />
        <CounterClockwiseClockIcon className="size-[30px] cursor-pointer hover:bg-[#00377e] rounded-full" />
        <CalendarIcon className="size-[30px] cursor-pointer hover:bg-[#00377e] rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
