import React from 'react'
import {connect} from 'react-redux';


class PageList extends React.Component{
    renderList(){
        return (
            this.props.pages.map((page)=>
                <li key={page.id}>
                    {page.name}
                </li>
            )
        )
    }

    render(){
        return (
            <ul className="sideBar">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        pages:state.pages
    }
}

export default connect(mapStateToProps)(PageList)