import React, { useEffect } from 'react'
import DataTable from '../datatable/DataTable'
import { DummyFoodData } from '@/utils/data/food'
import Link from 'next/link'

const FoodDatatable =   () => {
  return (  
    <div>
        <div className='flex justify-end w-full'>
          <Link href={'/dashboard/foods/add'} className='py-2 px-5 bg-gray-800 border border-gray-700 rounded-xl mt-5'>Add new meal</Link>
        </div>

        <DataTable columns={["name","ingredients","Image","description","instructions", "Action"]} count={10} data={DummyFoodData}/>
    </div>
  )
}

export default FoodDatatable