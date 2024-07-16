import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='gird grid-cols-1 space-y-[50px] w-fit h-screen bg-[#c77dff]  ml-4 mt-4 p-4 rounded-xl '>
     <ul className='font-medium text-1xl space-y-[50px] grid grid-cols-1 divide-y '>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className=' hover:rounded-md  justify-center items-center '>
        <Link href="/dashboard/Profile">Profile</Link>
      </li>
      <li>
        <Link href="/dashboard/Applyjobs">Apply Jobs</Link>
      </li>
      <li>
        <Link href="/dashboard/Myjobs">My Jobs</Link>
      </li>
      <li>
        <Link href="/paychecks">Paychecks</Link>
      </li>
    </ul>
      
    </div>
  )
}

export default Sidebar
