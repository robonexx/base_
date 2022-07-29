import {useState} from 'react'

import '../../styles/components/Nav2/Nav2.scss'

export default function Nav2() {
    const [toggle, setToggle] = useState(false)

    const handleMenu = () => setToggle(!toggle);

   return (
    <div className='nav2'>
         NAV2
        <button onClick={handleMenu}>Click</button>
        <div className={`${toggle ? 'nav2-menu open' : 'nav2-menu'}`}>

        </div>
       
    </div>
  )
}
