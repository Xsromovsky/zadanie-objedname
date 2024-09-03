import React, { useState } from "react";
import { OrderType } from "../utils/types";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

type Props = {
  order: OrderType;
};

const OrderButton = (props: Props) => {
//   const orderTime = parse(props.order.Time, "HH:mm", new Date());
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // console.log(orderTime);

  const orderClassname = twMerge(
    classNames(
      "relative  w-[90px] h-[50px] m-2 rounded-lg flex justify-center items-center text-white",
      {
        "bg-[#002d67] transition duration-150 hover:bg-[#00377e]": !isClicked && (props.order.Capacity !== props.order.OriginalCapacity),
        "bg-green-500 transition duration-150 hover:bg-green-600": isClicked,
        "bg-red-500 hover:bg-red-600": (props.order.Capacity === props.order.OriginalCapacity)
      }
    )
  );

  const handleClick = ()=> {
    setIsClicked(!isClicked);
  }

  return (
    <button className={orderClassname} onClick={handleClick}>
      <span className="absolute top-1 left-1 text-[10px]">
        ({props.order.Capacity}/{props.order.OriginalCapacity})
      </span>
      <span className="text-[20px]">{props.order.Time}</span>
    </button>
  );
};

export default OrderButton;
