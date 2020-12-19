import React from 'react'

function SidebarRow({title, Icon}) {
    return (
        <div className="sidebar_row">
            <Icon fontSize="large"/>
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarRow
