import '../../../styles/components/Nav1/NavBtn1.scss'

const NavBtn = ({ handleClick, navActive }) => {
    
    /* 
     const [navActive, setNavActive] = useState(false);

     const handleClick = () => {
    setActive(!active);
    setNavActive(!active);
  };
    */

    return (
        
        <div className={`navBtn ${navActive ? 'open' : 'navBtn'} `} onClick={handleClick}>
                    <div className='line'></div>
                </div>
           
     );
}
 
export default NavBtn;


/* 
<button className={`${styles.navBtn}`} onClick={handleClick} >
          <NavMobile  navActive={navActive} />
        </button>

*/