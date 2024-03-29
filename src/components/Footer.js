import { social } from '../data';
import Copyright from './Copyright';
import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
          {/* Social media icons */}
          <div className="flex space-x-6">
            {social.map((item, index) => {
              const { icon, href } = item;
              return (
                <a key={index} href={href} className="text-base text-accent">
                  {icon}
                </a>
              );
            })}
          </div>
          {/* Logo */}
          <div className="text-center">
            <img src={Logo} alt="logo" />
          </div>
          {/* Copyright */}
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
