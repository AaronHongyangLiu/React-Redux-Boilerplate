import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getAllEvents} from "../actions/index"
import SideBar from './SideBar'
import SchedulePage from './SchedulePage'
require('../../scss/style.scss');

// const App = () => (
//     <div className="fullScreen">
//         <SideBar />
//         <SchedulePage/>
//     </div>
// );

class App extends React.Component {
    componentWillMount(){
        this.props.getEvents();
    }

    render(){
        return(
            <div className="fullScreen">
                <SideBar />
                <SchedulePage/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getEvents:getAllEvents},dispatch)
}

export default connect(null,mapDispatchToProps)(App);
