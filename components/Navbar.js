import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <div className='flex justify-between w-11/12'>
      <Logo />
      <NavMenu />
    </div>
  );
};

export default Navbar;
