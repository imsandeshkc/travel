import React, {useState} from 'react'
import './navbar.css'

// react icons import
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const NavItems = ['Home', 'Packages', 'Shop', 'About', 'Pages', 'News', 'Contact'] 

const Navbar = () => {

	const [active , setActive] = useState('navBar')

	// function to toggle navBar
	const showNav = () => {
		setActive('navBar activeNavbar')
	}

	// function to remove navBar
	const removeNav = () => {
		setActive('navBar')
	}

  return (

	<section className='navBar section'>

    	<header className="header flex">

        	<div className="logoDiv">

				<a href="./Navbar.jsx" className="logo">
					<h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
				</a>

        	</div>

        	<div className={active}>

				<ul className="navLists flex">

					{NavItems.map(item=>{
						return (
						<li key={item} className="navItem">
							<a href="1" className='navLink'>{item}</a>
						</li>
						)
					})}

					<button className='btn'>
					<a href="1">BOOK NOW</a>
					</button>

				</ul>

				<div onClick={removeNav} className="closeNavbar">
					<AiFillCloseCircle className='icon'/>
				</div>

        	</div>

			<div onClick={showNav} className="toggleNavbar">
				<TbGridDots className='icon'/>
			</div>

    	</header>

	</section>

  )
}

export default Navbar