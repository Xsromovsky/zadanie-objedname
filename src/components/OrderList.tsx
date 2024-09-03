import React from 'react'
import { fetchData } from '../api/fetchData'
import { useQuery } from '@tanstack/react-query'
import { useOrders } from '../hooks/useOrders'
import OrderComponent from './OrderComponent'
import { OrderType } from '../utils/types'
import { isAfter, parse, set } from 'date-fns'

type Props = {}

const OrderList = (props: Props) => {

  const { data: orders, isLoading, isError, error} = useOrders()
  console.log(orders);

  const now = new Date()

  const filterOrders = (orders: OrderType[] | undefined)=>{
    const newOrders = orders?.filter(order => {
      const orderTime = parse(order.Time, 'HH:mm', now)
      const orderDateTime = set(orderTime, {
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
      });
      return isAfter(orderDateTime, now);
    })
    return newOrders;
  }
  
  const futureOrder = orders ? filterOrders(orders) : []

  if(isLoading){
    return (<p>Loading ...</p>)
  }

  if(isError){
    return (<p>{JSON.stringify(error)}</p>)
  }

  const renderOrderComponent = futureOrder?.map((order, index) => <OrderComponent key={index} order={order}/>)

  return (
    <div className='flex flex-wrap items-center justify-center'>
      {/* <button onClick={}>fetch</button> */}
      {renderOrderComponent}
    </div>
  )
}

export default OrderList