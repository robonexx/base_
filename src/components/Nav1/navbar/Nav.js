import React, { useState, useEffect, useRef } from 'react';
import NavBtn from '../navBtn/NavBtn';
// styles
import '../../../styles/components/Nav1/Navbar1.scss';
import '../../../styles/components/Nav1/NavBtn1.scss';

export default function Nav(props) {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setNavActive(!click);
  };
  const navRef = useRef();
  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current.classList.add('navbar', 'scrollbg');
          navRef.current.classList.remove('hide');
        } else {
          navRef.current.classList.add('hide');
          navRef.current.classList.remove(
            'navbar', 'scrollbg'
          );
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className='navbar' ref={navRef}>
      <button className='menu_icon' onClick={handleClick}>
        <NavBtn navActive={navActive} />
      </button>
      <ul
        className={`${click ? 'nav_menu active' : 'nav_menu'}`          
        }
      >
        {props.children}
      </ul>
    </nav>
  );
}
