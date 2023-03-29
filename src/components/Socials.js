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
            <a
              href={item.href}
              target="_blank"
              classname="text-base"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
