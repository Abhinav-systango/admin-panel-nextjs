'use client'
import Image from 'next/image'
import React, { ForwardedRef, forwardRef} from 'react'
import dynamic from 'next/dynamic';
const BoxChartContainer = dynamic(() => import("@/components/charts/BoxChartContainer"), {ssr: false})

const Order = forwardRef<HTMLDivElement>((props, ref: ForwardedRef<HTMLDivElement>) => {
    const data = {
        _id: "66388291c6930d6776cd20a9",
        index: 0,
        username: "Ruiz Watkins",
        email: "ruizwatkins@solgan.com",
        date: "2024-03-05T09:40:32 -06:-30",
        order_status: "Returned",
        total: "$3,156.22",
        picture: "http://placehold.it/32x32",
      };

  return (
    <div ref={ref} id='order-print-component'>
        <p className='text-center font-extrabold text-xl'>Order</p>

        <div className='mt-5'>
            <div className='flex items-center justify-between'>
                <Image src={data.picture} alt='Image' width={100} height={100}/>
                <div className='flex flex-col gap-2'>
                    <p>Name: {data.username}</p>
                    <p>Email: {data.email}</p>
                </div>
            </div>
            <div className='mt-5 text-xs '>
                <p>Order status: {data.order_status}</p>
                <p>Order Placed: {data.date}</p>
            </div>
        </div>

        <div>
            <BoxChartContainer />
        </div>
    </div>
  )
})

export default Order