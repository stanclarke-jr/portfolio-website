import { social } from '../data';

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            key={index}
            className="flex-justify-center items-center text-accent"
          >
            <a href={item.href} className="text-base">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
