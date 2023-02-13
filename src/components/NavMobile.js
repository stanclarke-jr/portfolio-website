import { useState } from 'react';

import { navigation } from '../data';

import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline';
// import { MenuAlt3Icon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* Menu icons */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="h-8" />
      </div>
      {/* Circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="fixed top-0 right-0 h-4 w-4 rounded-full bg-accent"
      ></motion.div>
      {/* Menu items */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 flex w-full flex-col items-center justify-center overflow-hidden transition-all duration-300`}
      >
        {/* Close menu icon */}
        <div
          className="absolute top-8 right-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="h-8" />
        </div>
        {navigation.map((item) => {
          return (
            <li key={item.name} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className=" cursor-pointer text-xl capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
