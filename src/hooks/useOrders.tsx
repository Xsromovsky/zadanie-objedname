import { useState } from "react";
import { OrderType } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/fetchData";


export const useOrders = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: fetchData
      })
}

