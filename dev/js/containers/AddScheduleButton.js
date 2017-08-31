import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import {clickAddSchedule} from '../actions/index'

class AddScheduleButton extends React.Component{
    render(){
        return(
            <Button bsStyle="primary" onClick={()=>{this.props.add()}}>
                Add Schedule
            </Button>
        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({add:clickAddSchedule},dispatch)
}

export default connect(null,matchDispatchToProps)(AddScheduleButton)