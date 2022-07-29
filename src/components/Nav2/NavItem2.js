import React from 'react'

import '../../styles/components/Nav2/NavItem2.scss'

export default function NavItem2({url, title, id}) {
  return (
    <>
        <li key={id} className="nav-item">
                <a href={url} className="nav-links">
                  {title}
                </a>
                <iframe src={url} frameBorder='0'></iframe>
              </li>
        
    </>
  )
}
