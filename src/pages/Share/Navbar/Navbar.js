import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {FaRegMoon, FaSun} from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';



const Navbar = () => {
  const {handleChange, theme} = useContext(AuthContext)
    const menuItems = <>
        <button><Link to='/'>Home</Link></button>
        <button><HashLink to='#about' smooth>About</HashLink></button>
        <button><HashLink to='#project' smooth>Projects</HashLink></button>
        <button><HashLink to='#contact' smooth>Contact</HashLink></button>
        <button><Link to='/blog'>Blog</Link></button>
        <button onClick={handleChange}>{theme ? <FaSun /> : <FaRegMoon />}</button>
    </>
    return (
      <div className={`border-b fixed top-0 left-0 right-0 z-10 ${theme ? 'bg-slate-900 border-slate-700' : 'bg-white'}`}>
        <div className={`navbar flex justify-between w-full  max-w-[1240px] mx-auto`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary font-bold">
                {menuItems}
            </ul>
          </div>
          <Link to='/' className="font-bold normal-case text-xl">RAK<span className='text-primary'>IB</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex w-[35%]">
          <ul className="menu menu-horizontal px-1 w-full flex justify-between font-bold">
            {menuItems}
          </ul>
        </div>
      </div>
      </div>
    );
};

export default Navbar;