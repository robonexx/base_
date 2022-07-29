import {useState} from 'react'
import NavItem2 from './NavItem2';
import '../../styles/components/Nav2/Nav2.scss'


export default function Nav2() {
    const [toggle, setToggle] = useState(false)

    const handleMenu = () => setToggle(!toggle);

   return (
    <div className='nav2'>
         <p>Im a nav on above the page</p>
        <button onClick={handleMenu}>Click</button>
        <div className={`${toggle ? 'nav2-menu open' : 'nav2-menu'}`}>
        {content.map(({url, title, id}) => (
          <NavItem2 url={url} title={title} id={id} key={id}/>
        )
        )}
        </div>
       
    </div>
  )
}


const content = [
  {
    url: '/page2',
    title: 'item1',
    img: '',
    id: 1,
  },
  {
    url: '/page3',
    title: 'item2',
    img: '',
    id: 2,
  },
  {
    url: '/page4',
    title: 'item3',
    img: '',
    id: 3,
  },
];
