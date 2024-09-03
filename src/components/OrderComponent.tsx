import React, { useState } from "react";
import { OrderType } from "../utils/types";
import { parse } from "date-fns";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

type Props = {
  order: OrderType;
};

const OrderComponent = (props: Props) => {
//   const orderTime = parse(props.order.Time, "HH:mm", new Date());
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // console.log(orderTime);

  const orderClassname = twMerge(
    classNames(
      "relative  w-[90px] h-[50px] m-2 rounded-lg flex justify-center items-center",
      {
        "bg-[#00377e] transition duration-150 cursor-pointer": !isClicked && (props.order.Capacity !== props.order.OriginalCapacity),
        "bg-green-500 transition duration-150 cursor-pointer": isClicked,
        "bg-red-500": (props.order.Capacity === props.order.OriginalCapacity)
      }
    )
  );

  const handleClick = ()=> {
    setIsClicked(!isClicked);
  }

  return (
    <div className={orderClassname} onClick={handleClick}>
      <span className="absolute top-1 left-1 text-[10px]">
        ({props.order.Capacity}/{props.order.OriginalCapacity})
      </span>
      <span className="text-[20px]">{props.order.Time}</span>
    </div>
  );
};

export default OrderComponent;
