import {
  CalendarIcon,
  CounterClockwiseClockIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";

type Props = {
    onClick?: () => void
};


const navBarClassname = classNames('size-[40px] p-1 cursor-pointer hover:bg-[#00377e] rounded-full')

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#00193b] text-white w-screen flex justify-center">
      <div className="flex space-x-4 p-2">
        <PersonIcon className={navBarClassname} />
        <StarIcon className={navBarClassname} />
        <CounterClockwiseClockIcon className={navBarClassname} />
        <CalendarIcon className={navBarClassname} />
      </div>
    </div>
  );
};

export default Navbar;
