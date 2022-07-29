import React, { useState, useEffect, useCallback } from 'react';
/* import { useRouter } from 'next/router';
 */
import  '../../../styles/components/Nav1/DropDown1.scss';

export default function DropDownItem(props) {
  const [click, setClick] = useState(false);

  /* const { events } = useRouter(); */

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  // using useEffect to navigate from nav to a new page
  /* useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]); */

  return (
    <li key={props.title} className="dropdown_item">
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className="dropdown_link"
      >
        <span className="link_icon">{props.icon}</span>
        <span className="link_title">{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
}
