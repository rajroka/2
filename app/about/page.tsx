import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className='mt-5 w-screen h-screen bg-lime-300 p-8 grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            <div>
                <Image
                    src="/il.png"
                    alt="hello"
                    width={500}
                    height={500} 
                    className='shrink-0'/>
            </div>
            <div className='text-wrap bg-red-400'>
                hello
            </div>

        </div>
    )
}

export default About
