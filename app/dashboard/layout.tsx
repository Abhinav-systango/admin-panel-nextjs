import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/page'
import React from 'react'

const layout = ({children}: {children: Readonly<React.ReactNode>}) => {
  return (
    <div className='dark:bg-gray-950 dark:text-white h-screen w-full'>
      <div className='flex h-full gap-4'>
        <Sidebar /> 
        <div className='w-full h-full px-5 overflow-auto'>
            <div className=''>
              <Navbar />
            </div>
            {children}
        </div>

      </div>
        
    </div>
  )
}

export default layout