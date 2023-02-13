import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ChevronUpIcon } from '@heroicons/react/outline';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 4800 ? setVisible(true) : setVisible(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-16 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accent text-white transition-all hover:bg-accent-hover"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    )
  );
};

export default BackToTopButton;
