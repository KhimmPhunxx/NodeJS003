import React from 'react'
import './LayoutDashboard.css'
import { Outlet, useNavigate } from 'react-router-dom';

export default function LayoutDashboard() {
  const navigat = useNavigate();
  const onClickMenu = (routeName) => {
      navigat(routeName);
  }

  return (
    <>
    <header className='h-[50px] bg-gray-800 p-3'>
        <section className='Manrope flex justify-between max-w-8xl mx-auto'>
            <h1 className='text-xl font-bold text-gray-100'>PREYCODE Backend</h1>
            <ul className='flex p-1 space-x-8 text-sm text-gray-100 font-medium cursor-pointer'>
                <li onClick={() => onClickMenu("/dashboard/")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300 '>
                  Home
                </li>
                <li onClick={() => onClickMenu("/dashboard/customer")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                   Customer
                </li>
                <li onClick={() => onClickMenu("/dashboard/user")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    User
                </li> 
                <li onClick={() => onClickMenu("/dashboard/product")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    Product
                </li>
                <li onClick={() => onClickMenu("/dashboard/category")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    Category
                </li>
                <li onClick={() => onClickMenu("/dashboard/cart")} className='hover:text-gray-400 hover:underline text-gray-100 hover:duration-300'>
                    Cart
                </li>
               
            </ul>
            <div>
                <button onClick={() => onClickMenu("/")} className='text-sm bg-gray-700 text-white px-3 py-1 rounded'>Login to Website</button>
            </div>
        </section>
    </header>
    <Outlet/>
    {/* <footer className='e-full h-72 bg-gray-800 mt-5'>
        <section >

        </section>
    </footer> */}
    </>
  )
}
