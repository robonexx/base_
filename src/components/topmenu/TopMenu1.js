import React from 'react';

import { AiFillMail } from 'react-icons/ai';

// styles
import '../../styles/components/Nav1/TopMenu1.scss';

export default function TopMenu1() {
  return (
    <div className='top_menu'>
      <h2>Logo</h2>
      <h3 className='subtitle'>Webiste  header </h3>
      <div title='Contact' icon={<AiFillMail />} url='/contact' />
    </div>
  );
}
