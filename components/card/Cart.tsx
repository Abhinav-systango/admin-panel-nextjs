import React from 'react'

const Cart = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='rounded-lg bg-gray-900 shadow-md p-5'>{children}</div>
  )
}

export default Cart