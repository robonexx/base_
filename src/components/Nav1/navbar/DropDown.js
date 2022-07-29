
// styles
import '../../../styles/components/Nav1/DropDown1.scss'

function DropDown(props) {
  return (
    <>
      <ul className="dropdown_menu">{props.children}</ul>
    </>
  );
}

export default DropDown;
