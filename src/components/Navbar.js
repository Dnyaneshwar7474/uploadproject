import React, { useEffect } from 'react'
import profileimg from '../images/profileimg.png';
import { useState } from 'react';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  //  const [datalist,setStatus]=React.useState(false)
  return (



    <header className="text-gray-600 body-font">
 
 <nav className="w-full bg-slate-900">
            <div className="justify-between px-4 mx-auto  md:items-center md:flex">
                <div className='md:w-1/6'>
                    <div className="flex items-center justify-between py-1 md:py-4 md:block">
                        <a href="" className='relative left-9 md:left-0'>
                            <h2 className="text-2xl font-semibold text-white">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                        <div className="flex items-center space-x-1">
        <a href="" className="py-5 px-3 text-white">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <a href="" className=" h-8 w-8 rounded-full">
          <img src={profileimg}/>
        </a>
      </div>
      <div className='absolute top-4 left-1'>
      <button
                                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
      </div>
                            

                           
                        </div>
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      
                        <ul className="flex-row  space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-white md:px-4">
                                <a href="#" >Home</a>
                            </li>
                            <li className="text-white md:px-4">
                                <a href="#">Blog</a>
                            </li>
                            <li className="text-white md:px-4">
                                <a href="#">About US</a>
                            </li>
                            <li className="text-white md:px-4">
                                <a href="#">Contact US</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div className='md:w-1/6'>

                        <div className="hidden md:flex items-center space-x-1 float-right"> 
        <a href="" className="py-5 px-3 text-white">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <a href="" className=" h-8 w-8 rounded-full">
          <img src={profileimg}/>
        </a>
      </div>
                        </div>
            </div>
        </nav>
</header>
  )
}

export default Navbar

