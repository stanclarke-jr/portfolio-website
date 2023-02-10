import { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={`${
        bg ? 'h-20 bg-tertiary' : 'h-24'
      } fixed top-0 z-10 flex w-full items-center text-white transition-all duration-300`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        {/* Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
