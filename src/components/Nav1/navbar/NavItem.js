import React, { useState, useEffect, useCallback } from 'react';
/* import { useRouter } from 'next/router'; */

import '../../../styles/components/Nav1/Navbar1.scss';

export default function NavItem(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  /* const { events } = useRouter(); */
  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  /* useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]); */

  return (
    <li
      className='nav_item'
      key={props.title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className='nav_links'
      >
        <span className='link_icon'>{props.icon}</span>
        <span className='link_title'>{props.title}</span>
      </a>
      {dropdown && props.children}
      {click && props.children}
    </li>
  );
}
