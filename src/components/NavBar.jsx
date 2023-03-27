import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart,AiOutlineHome} from "react-icons/ai"
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'
import "./NavBar.css"
const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <IconContext.Provider value={{size:'4em',color:'white'}}>
   <nav className='navbar'>
   <Link to="/"><AiOutlineHome className='homeicon' /></Link>
    <Link to="cart"><AiOutlineShoppingCart className='carticon'/><span className='carttext'>{cartTotalQuantity}</span></Link>
   </nav>
   </IconContext.Provider>
  )
}

export default NavBar