import React from 'react'
import SearchBarIcon from '../assets/search.svg'
import MessageIcon from '../assets/messages.png'
import UserIcon from '../assets/user.png'
import CartIcon from '../assets/cart.png'
import UploadIcon from '../assets/upload.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-18 bg-blue-400 min-w-screen px-4'>
        <div className='font-bold text-white text-2xl ml-20'>
            NAME OF THE SITE
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
                <img src={SearchBarIcon} alt="Search" className="w-5 h-5 invert" />
                </span>
                <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 w-100 rounded-sm border border-white/30 bg-blue-400 text-white placeholder-white outline-none focus:border-white focus:shadow-md focus:shadow-white/20"
                />
            </div>
        </div>
        <div className="flex flex-row justify-center items-center mr-20 text-white top-1/2">
            <img src={CartIcon} alt="Cart Icon" className="cursor-pointer w-6 h-6 mr-5 invert" />
            <img src={MessageIcon} alt="Message Icon" className="cursor-pointer w-6 h-6 mr-5 invert" />

            <Link to="/sell"> 
                <button type="sell" className="cursor-pointer flex items-center bg-orange-400 text-white py-1 px-4 mr-5 rounded hover:bg-orange-500 transition">
                    <img src={UploadIcon} alt="Upload Icon" className="w-5 h-5 mb-0.5 mr-2 invert" />
                    Sell
                </button>
            </Link>
            <img src={UserIcon} alt="User Icon" className="cursor-pointer w-6 h-6 mr-5 invert" />
        </div>
    </div>
  )
}

export default Header
