import React from 'react'

const SheetModel = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className="absolute z-50 h-screen bg-gray-900 w-2/3 sm:w-1/3 right-0 top-0">
        {children}      
    </div>
  )
}

export default SheetModel