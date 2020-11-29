import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer"


function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            {/* <h1>hello im a sidebar</h1> */}
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotimg"/>
            <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
            <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"></SidebarOption>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlists) => (
                <SidebarOption title={playlists.name}/>
            ))}
            {/* <SidebarOption title="Rock"/>
            <SidebarOption title="Metal"/> */}
        </div>
    )
}

export default Sidebar
