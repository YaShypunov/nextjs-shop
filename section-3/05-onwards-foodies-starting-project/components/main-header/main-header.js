import React from 'react';
import Link from 'next/link';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
   <header className={classes.header}>
    <Link href='/' className={classes.logo}>
     <Image src={logoImg} alt="A plate with food on it" priority />
     NextLevel Food 
    </Link>

    <nav className={classes.nav}>
      <ul>
        <NavLink href='/meals'>Browse Meals</NavLink>
        <NavLink href='/community'>Foodies Community</NavLink>
      </ul>
    </nav>
   </header>
    </>
  );
};

export default MainHeader;
