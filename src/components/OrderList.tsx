import React from 'react'
import { useOrders } from '../hooks/useOrders'
import OrderButton from './OrderButton'
import { OrderType } from '../utils/types'
import { isAfter, parse, set } from 'date-fns'

type Props = {
  currentDate: Date
}

const OrderList = (props: Props) => {

  const { data: orders, isLoading, isError} = useOrders()

  // filtering past dates
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
  // actual and future orders
  const futureOrder = orders ? filterOrders(orders) : []

  if(isLoading){
    return (<p className='text-[30px] font-bold'>Loading ...</p>)
  }

  if(isError){
    return (<p>Something went wrong...</p>)
  }

  const renderOrderComponent = futureOrder?.map((order, index) => <OrderButton key={index} order={order}/>)

  return (
    <div className='flex flex-wrap items-center justify-center'>
      {renderOrderComponent}
    </div>
  )
}

export default OrderList