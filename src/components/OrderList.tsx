import React from 'react'
import { fetchData } from '../api/fetchData'
import { useQuery } from '@tanstack/react-query'
import { useOrders } from '../hooks/useOrders'
import OrderComponent from './OrderComponent'
import { OrderType } from '../utils/types'
import { isAfter, parse, set } from 'date-fns'

type Props = {
  currentDate: Date
}

const OrderList = (props: Props) => {

  const { data: orders, isLoading, isError, error} = useOrders()

  const filterOrders = (orders: OrderType[] | undefined)=>{
    return orders?.filter(order => {
      const orderTime = parse(order.Time, 'HH:mm', props.currentDate)

      const orderDateTime = set(orderTime, {
        year: props.currentDate.getFullYear(),
        month: props.currentDate.getMonth(),
        date: props.currentDate.getDate(),
      });
      return isAfter(orderDateTime, new Date());
    })
  }
  
  const futureOrder = orders ? filterOrders(orders) : []

  if(isLoading){
    return (<p>Loading ...</p>)
  }

  if(isError){
    return (<p>{JSON.stringify(error)}</p>)
  }

  const renderOrderComponent = futureOrder?.map((order, index) => <OrderComponent key={index} order={order}/>)
  const testComponent = orders?.map((order, index) => <OrderComponent key={index} order={order}/>)
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {renderOrderComponent}
    </div>
  )
}

export default OrderList