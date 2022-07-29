import TopMenu1 from '../../../components/topmenu/TopMenu1';
import Nav from '../../../components/Nav1/navbar/Nav';
import NavItem from '../../../components/Nav1/navbar/NavItem';
import DropDown from '../../../components/Nav1/navbar/DropDown';
import DropDownItem from '../../../components/Nav1/navbar/DropDownItem';

// styles
import './Header1.scss';

import { AiOutlineHome } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiMusicbrainz, SiHandshake } from 'react-icons/si';
import {
  MdOutlineHistoryEdu,
  MdOutlineAnnouncement,
  MdOutlineGroups,
} from 'react-icons/md';
import { GiPeaceDove, GiFist, GiPlantRoots } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';
import { FiMusic } from 'react-icons/fi';
import { FaRecordVinyl } from 'react-icons/fa';

export default function Header1() {
  return (
    <div className='header'>
      <TopMenu1 />
      <Nav>
        <NavItem title='home' icon={<AiOutlineHome />} url='/' />
        <NavItem title='about' icon={<MdOutlineAnnouncement />} url='/about' />

        <NavItem
          title='dropdown1'
          icon={<MdOutlineHistoryEdu />} /*  url='/history' */
        >
          <DropDown>
            <DropDownItem
              title='page1'
              icon={<SiMusicbrainz />}
              url='/page1'
            />
            <DropDownItem
              title='page2'
              icon={<GiPeaceDove />}
              url='/page2'
            />
            <DropDownItem
              title='page3'
              icon={<MdOutlineGroups />}
              url='/page3'
            />
            <DropDownItem
              title='page4'
              icon={<WiTrain />}
              url='/page4'
            />
          </DropDown>

        </NavItem>
        <NavItem title='dropdown2' icon={<SiMusicbrainz />}>
          <DropDown>
            <DropDownItem
              title='page1'
              icon={<MdOutlineGroups />}
              url='/page1'
            />
            <DropDownItem
              style={{ PointerEvents: 'none' }}
              title='somepage'
              icon={<GiPlantRoots />}
              url=''
            />
            <DropDownItem
              title='page2'
              icon={<SiHandshake />}
              url='/page2'
            />
          </DropDown>
        </NavItem>
        <NavItem title='item' icon={<RiArticleLine />} url='/item' />
      </Nav>
    </div>
  );
}
