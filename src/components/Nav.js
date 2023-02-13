import { navigation } from '../data';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 text-[15px] capitalize">
        {navigation.map((item) => {
          return (
            <li
              key={item.name}
              className="cursor-pointer text-white hover:text-accent"
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
