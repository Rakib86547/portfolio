import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../../../provider/AuthProvider';
import '../../../App.css';



const Navbar = () => {
  const { handleChange, theme } = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  let className= "menu-hide"
  let className2 = "menu-open"
  return (

    <div>
      <header className={`md:p-6 p-1 large-menu border-b fixed top-0 left-0 right-0 z-10 ${theme ? 'bg-slate-900 border-slate-700' : 'bg-white'}`}>
        <div className="container flex justify-between mx-auto items-center">
          <Link to='/' className="font-bold normal-case text-xl">RAK<span className='text-primary'>IB</span></Link>
          <ul className="items-stretch menu-list-large hidden md:flex  space-x-3 font-bold w-[36%] justify-between">
            <li className="flex">
              <button><Link to='/'>Home</Link></button>
            </li>
            <li className="flex">
              <button><HashLink to='#about' smooth>About</HashLink></button>
            </li>
            <li className="flex">
              <button><HashLink to='#project' smooth>Projects</HashLink></button>
            </li>
            <li className="flex">
              <button><HashLink to='#contact' smooth>Contact</HashLink></button>
            </li>
            <li className="flex">
              <button><Link to='/blog'>Blog</Link></button>
            </li>
            <li className="flex">
              <button onClick={handleChange}>{theme ? <FaSun /> : <FaRegMoon />}</button>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden" onClick={() => setOpen(!open)}>
            <button>{open ? <RxCross2 className='text-[25px]' /> : <HiBars3 className='text-[25px]' />}</button>
          </button>
        </div>
      </header>

      {/* ---------------- FOR MOBILE ------------- */}
      <div className='bg-red-500 relative'>
        <ul className={`${open ? className2 : className} mobile-ul px-[36px] ul py-[30px] items-stretch ${theme ? "bg-[#0F1729]" : "bg-slate-200"} space-x-3 font-bold fixed w-[220px] h-screen z-[900] top-[66px]`}>
          <li className="flex">
            <button><Link to='/'>Home</Link></button>
          </li>
          <li className="flex li">
            <button><HashLink to='#about' smooth>About</HashLink></button>
          </li>
          <li className="flex li">
            <button><HashLink to='#project' smooth>Projects</HashLink></button>
          </li>
          <li className="flex li">
            <button><HashLink to='#contact' smooth>Contact</HashLink></button>
          </li>
          <li className="flex li">
            <button><Link to='/blog'>Blog</Link></button>
          </li>
          <li className="flex">
            <button onClick={handleChange}>{theme ? <FaSun /> : <FaRegMoon />}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;