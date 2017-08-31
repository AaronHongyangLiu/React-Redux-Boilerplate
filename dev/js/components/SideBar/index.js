import React from 'react'
import PageList from '../../containers/page-list'

class SideBar extends React.Component{
    render(){
        return(
            <div className="sideBar">
                <h2 className="noMargin">Page List</h2>
                <PageList />
            </div>
        );
    }
}

export default SideBar