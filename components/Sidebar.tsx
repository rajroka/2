import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='gird grid-cols-1 space-y-[50px] w-fit h-screen bg-[#c77dff]  ml-4 mt-4  rounded-xl '>
     <ul className='font-medium text-1xl space-y-[50px] grid grid-cols-1 divide-y mt-10 '>
      <li className='px-4'>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className='px-4 hover:rounded-md  justify-center items-center hover:bg-slate-300 '>
        <Link href="/dashboard/Profile">Profile</Link>
      </li>
      <li className='px-4'>
        <Link href="/dashboard/Applyjobs">Apply Jobs</Link>
      </li>
      <li className='px-4'>
        <Link href="/dashboard/Myjobs">My Jobs</Link>
      </li>
      <li className='px-4'>
        <Link href="/paychecks">Paychecks</Link>
      </li>
    </ul>
      
    </div>
  )
}

export default Sidebar
