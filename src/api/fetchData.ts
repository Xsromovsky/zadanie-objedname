import axios from "axios"
import { OrderType } from "../utils/types";


export const fetchData = async (): Promise<OrderType[]> => {
    const response = await axios.get('http://localhost:3100/orders')
    // console.log(response.data);
    
    return response.data
}