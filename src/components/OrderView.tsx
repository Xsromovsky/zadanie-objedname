import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { addDays, format, subDays } from "date-fns";
import React, { useState } from "react";
import OrderList from "./OrderList";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

type Props = {};

const OrderView = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leftDate, setLeftDate] = useState(selectedDate);
  const [rightDate, setRightDate] = useState(addDays(selectedDate, 1));
  const [isLeftActive, setIsLeftActive] = useState<boolean>(true);

  const handleLeftBtn = () => {
    setIsLeftActive(true);
    setSelectedDate(leftDate);
  };
  const handleRightBtn = () => {
    setIsLeftActive(false);
    setSelectedDate(rightDate);
  };

  const leftButton = twMerge(
    classNames("p-2 w-[100px] rounded", {
      "bg-yellow-600": isLeftActive,
    })
  );
  // console.log(selectedDate);

  const rightButton = twMerge(
    classNames("p-2 w-[100px] rounded", {
      "bg-yellow-600": !isLeftActive,
    })
  );

  const iconClassname = classNames(
    "size-[35px] cursor-pointer hover:bg-[#00377e] rounded-full p-1"
  );

  const handleNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));

    setLeftDate(rightDate);
    setRightDate((prevDate) => addDays(prevDate, 1));
  };

  const handlePreviousDay = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));

    setRightDate(leftDate);
    setLeftDate((prevDate) => subDays(prevDate, 1));
  };

  return (
    <div className="flex flex-col w-[500px] items-center space-x-3 bg-[#00193b] rounded-lg">
      <div className="flex space-x-3 items-center p-1">
        <ChevronLeftIcon
          onClick={handlePreviousDay}
          className={iconClassname}
        />
        <button className={leftButton} onClick={handleLeftBtn}>
          {format(leftDate, "dd.MM")}
        </button>
        <button className={rightButton} onClick={handleRightBtn}>
          {format(rightDate, "dd.MM")}
        </button>
        <ChevronRightIcon onClick={handleNextDay} className={iconClassname} />
        <button
          onClick={() => {
            console.log(selectedDate);
            // console.log(leftDate);
          }}
        >
          check
        </button>
      </div>
      <div>
        <OrderList currentDate={selectedDate} />
      </div>
    </div>
  );
};

export default OrderView;
