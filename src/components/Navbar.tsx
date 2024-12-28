"use client";
import React from 'react'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className=''>
        <nav className='pr-6 pt-8 bg-gradient-to-r from-zinc-400 via-cyan-400 to-slate-700 '>
            <div className=' flex justify-between items-center '>
                <div className='text-4xl font-extrabold font-serif p-4'>
                    Shagufta  <span className='text-slate-900 pl-10'> portfolio </span></div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'><Link href='#hero'>HOME</Link></li>
                    <li className='menuLink'><Link href='#about'>ABOUT</Link></li>
                    <li className='menuLink'><Link href='#projects'>PROJECTS</Link></li>
                    <li className='menuLink'><Link href='#skills'>SKILLS</Link></li>
                    <li className='menuLink'><Link href='#contact'>CONTACT</Link></li>    
                </ul>
                <AiOutlineMenu className='md:hidden'size={30} />
            </div>
        </nav>
    </div>
  )
}

export default Navbar