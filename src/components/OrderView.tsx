import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { addDays, format, subDays } from "date-fns";
import React, { useState } from "react";
import OrderList from "./OrderList";

type Props = {};

const OrderView = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = format(currentDate, "dd.MM");
  const tommorow = format(addDays(currentDate, 1), "dd.MM");
  
  
  const handleNextDay = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 1));
    console.log(currentDate);
    
  };

  const handlePreviousDay = () => {
    setCurrentDate((prevDate) => subDays(prevDate, 1));
    console.log(currentDate);
    
  };

  return (
    <div className="flex flex-col w-[500px] items-center space-x-3 bg-[#00193b] rounded-lg">
      <div className="flex space-x-3 items-center p-1">
        <ChevronLeftIcon
          onClick={handlePreviousDay}
          className="size-[25px] cursor-pointer"
        />
        <p className="p-2 bg-yellow-600 rounded">Dnes {today}</p>
        <p className="p-2">Zajtra {tommorow}</p>
        <ChevronRightIcon
          onClick={handleNextDay}
          className="size-[25px] cursor-pointer"
        />
      </div>
      <div>
        <OrderList currentDate={currentDate}/>
      </div>
    </div>
  );
};

export default OrderView;
