'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import Vector from '../public/header/Vector.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Outer Container to Center Navbar */}
            <div className='w-full flex justify-center fixed top-6 z-50 px-4'>
                <nav className="w-full max-w-3xl flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">

                    {/* Logo */}
                    <div className="text-[22px] font-light">
                        N7
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center gap-10 text-[12px] uppercase tracking-wide">
                        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                            Solutions
                            <span>
                                <Image src={Vector} alt='vector'/>
                            </span>
                        </li>

                        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                            Resources
                            <span>
                                <Image src={Vector} alt='vector'/>
                            </span>
                        </li>

                        <li className="cursor-pointer hover:text-gray-300">
                            About Us
                        </li>
                    </ul>

                    {/* Desktop CTA Button */}
                    <button className="hidden md:block border border-gray-400 rounded-lg px-8 py-1 
                    text-[13px] uppercase tracking-wide hover:bg-white hover:text-blue-500 transition">
                        Request Demo
                    </button>

                    {/* Mobile Hamburger Trigger */}
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-5"
                        aria-label="Open Menu"
                    >
                        <span className="h-0.5 w-full bg-white rounded" />
                        <span className="h-0.5 w-full bg-white rounded" />
                    </button>

                </nav>
            </div>

            {/* Full-Screen Mobile Drawer Side Panel */}
            <div className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-md md:hidden transition-all duration-500 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                
                {/* Sliding Side Container - matches the white/5 glass aesthetics */}
                <div className={`absolute top-0 right-0 h-full w-[75%] sm:w-[50%] bg-black/40 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-between text-white transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] font-light">N7</span>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-300 text-xl p-2"
                            aria-label="Close Menu"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Drawer Navigation Links */}
                    <ul className="flex flex-col gap-8 text-[14px] uppercase tracking-wide my-auto">
                        <li className="flex items-center justify-between cursor-pointer pb-2 border-b border-white/5 hover:text-gray-300">
                            Solutions
                            <span className="rotate-90">
                                <Image src={Vector} alt='vector'/>
                            </span>
                        </li>
                        <li className="flex items-center justify-between cursor-pointer pb-2 border-b border-white/5 hover:text-gray-300">
                            Resources
                            <span className="rotate-90">
                                <Image src={Vector} alt='vector'/>
                            </span>
                        </li>
                        <li className="cursor-pointer pb-2 border-b border-white/5 hover:text-gray-300">
                            About Us
                        </li>
                    </ul>

                    {/* Drawer Footer CTA */}
                    <button className="w-full border border-gray-400 rounded-lg py-2.5 text-[13px] uppercase tracking-wide hover:bg-white hover:text-blue-500 transition">
                        Request Demo
                    </button>

                </div>
            </div>
        </>
    )
}

export default Navbar