import React from 'react'
import { OrderType } from '../utils/types'

type Props = {
    order: OrderType
}

const OrderComponent = (props: Props) => {
  return (
    <div className='relative bg-[#00377e] w-[90px] h-[50px] m-2 rounded-lg cursor-pointer flex justify-center items-center'>
        <span className='absolute top-1 left-1 text-[10px]'>({props.order.Capacity}/{props.order.OriginalCapacity})</span>
        <span className='text-[20px]'>{props.order.Time}</span>
    </div>
  )
}

export default OrderComponent