import { NavLinks } from '@/utils/NavLinksData';
import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full w-60 dark:bg-gray-800 hidden md:block'>
        <div className='my-8 ml-4'>
          <p className='font-bold tracking-wider text-xl'>Dash</p>
          <p className='text-xs'>Admin dashboard</p>
        </div>
        <div className='flex flex-col gap-2'>
          {
            NavLinks.map(link => {
              return <Link href={link.link} className='flex items-center gap-2 w-full hover:bg-blue-500 px-4 py-2 cursor-pointer' key={Math.random()}>
                  {link.icon}
                  <p>{link.name}</p>
              </Link>
            })
          }
        </div>
    </div>
  )
}

export default Sidebar