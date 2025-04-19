import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import { Link } from 'react-router';

const Navbar = () => {

	const Links = <>
		<Link to='/'><li className=''>Home</li></Link>
		<Link to='/about'><li className=''>About</li></Link>
		<Link to='/readList'><li className=''>Read List</li></Link>


	</>


	return (
		<>
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

							{
								Links
							}


						</ul>
					</div>
					<a className="btn btn-ghost text-xl"> <BrandLogo></BrandLogo> </a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold">
						{
							Links
						}
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>

		</>
	);
};

export default Navbar;