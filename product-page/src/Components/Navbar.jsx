import React from 'react'
import brand_logo from '../images/brand_logo.png';
const Navbar = () => {
    const links = [
        {
            id: '1',
            link: 'menu'
        },
        {
            id: '2',
            link: 'location'
        },
        {
            id: '3',
            link: 'about'
        },
        {
            id: '4',
            link: 'contact'
        }
    ]
  return (

    <div className='flex justify-between items-center w-[100%] h-20 text-black max-w-[1057px] mx-auto'>
        <div>
            <img src={brand_logo}  alt="image not upload"/>
        </div>
        <ul className='flex justify-center items-center'>
            {links.map(({id,link}) =>(
                <li key={id} 
                className='px-4 cursor-pointer uppercase 
                text-black  text-base font-semibold p px-5 py-3'>
                    {link}
                </li>

            ))}
        </ul>
        <div>
            <a href="#" className='cursor-pointer bg-red-600
             text-white text-base font-semibold no-underline py-2 px-5'>Login</a>
        </div>
    </div>
    
    
    
  )
}
export default Navbar