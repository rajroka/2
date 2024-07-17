import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

const Navbar = () => {
    return (
        <div className=' bg-[#c77dff] w-[100%] p-4 mt-1 ml-4  hidden md:flex space-x-4 justify-between items-center  rounded-xl '>
            <div className='items-center '>
                <span>Logo </span>
            </div>

            <input placeholder='search' className='p-2 rounded-xl outline outline-1 outline-blue-300 hover:outline-2  sm:hidden  ' />


            <div className='flex  items-center justify-between space-x-2 '>
                <div><h1 className='font-medium'>Raj Roka</h1></div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>




        </div>
    )
}

export default Navbar
