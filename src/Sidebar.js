import { Avatar, Button } from '@material-ui/core'
import {  BookmarkBorder, EmailOutlined, ExploreOutlined, HomeOutlined, NotificationsOutlined, PersonOutline } from '@material-ui/icons'
import React from 'react'
import { auth } from './firebase'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import './SidebarRow.css'
import { useStateValue } from './StateProvider'
function Sidebar() {
    const[{user}]=useStateValue();
    const handleLogout = () =>{
        auth.signOut();
    }
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            <img className="sidebar_logo" src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png" alt=""/>
            <SidebarRow title="Home" Icon={HomeOutlined}/>
            <SidebarRow title="Explore" Icon={ExploreOutlined}/>
            <SidebarRow title="Notification" Icon={NotificationsOutlined}/>
            <SidebarRow title="Messages" Icon={EmailOutlined}/>
            <SidebarRow title="Bookmark" Icon={BookmarkBorder}/>
            <SidebarRow title="Profile" Icon={PersonOutline}/>
            <Button className="tweetbutton">Tweet</Button>
            </div>
            <div className="sidebar_bottom" onClick={handleLogout}>
                <Avatar src={user.photoURL}/>
               <div className="sidebar_bottom_info">
               <h4>{user.displayName}</h4>
                <p>@{user.displayName.split(" ").join("").toLowerCase()}</p>
               </div>
            </div>
        </div>
    )
}

export default Sidebar
