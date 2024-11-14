import Link from 'next/link'
import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-black min-h-[450px] md:min-h-[250px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8'>
                <div className='flex gap-1 items-center text-xl md:text-2xl lg:text-3xl font-bold md:ml-3'>
                    <span className='italic text-white'>Art</span>
                    <FaHome className='text-yellow-600'/>
                    <span className='italic text-white'>Design</span>
                </div>
                <div className='flex flex-col md:flex-row mt-8 md:mt-16 gap-8 tracking-wider text-white text-center'>
                    <Link href="/" className='hover:text-yellow-400'>
                        Home
                    </Link>
                    <Link href="/" className='hover:text-yellow-600'>
                        Home
                    </Link>
                    <Link href="/" className='hover:text-yellow-600'>
                        Home
                    </Link>
                    <Link href="/" className='hover:text-yellow-600'>
                        Home
                    </Link>
                    
                </div>
                <div className='flex gap-x-8 items-center mt-8 md:mt-16 md:pr-8'>
                    <Link href="/">
                        <BsFacebook 
                            className='text-white hover:text-yellow-600 hover:-translate-y-1.5 duration-300'
                            size={25}
                        />
                    </Link>
                    <Link href="/">
                        <BsInstagram 
                            className='text-white hover:text-yellow-600 hover:-translate-y-1.5 duration-300'
                            size={25}
                        />
                    </Link>
                    <Link href="/">
                        <BsYoutube 
                            className='text-white hover:text-yellow-600 hover:-translate-y-1.5 duration-300'
                            size={25}
                        />
                    </Link>
                </div>
            </div>
            <p className='text-white text-center text-sm pb-8 md:mt-12'>Designed by GARTI@Abdenour</p>
        </div>
    
    </footer>
  )
}

export default Footer
