import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeScheduleName,changeScheduleStartTime,changeScheduleEndTime,ChangeScheduleDay,changeScheduleClassId} from '../actions/index'
import {Checkbox, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class AddScheduleForm extends React.Component{
    render(){
        return(
            <form>
                <FormGroup>
                    <ControlLabel >Content</ControlLabel>
                    <FormControl type="text" onChange={(e)=>{this.props.changeName(e.target.value)}}/>
                </FormGroup>
                <hr/>
            <FormGroup>
                <span>
                    <select onChange={(e)=>{this.props.changeStartTime(e.target.value)}}>
                        <option value=""> </option>
                        <option value="6">6:00</option>
                        <option value="6.5">6:30</option>
                        <option value="7">7:00</option>
                        <option value="7.5">7:30</option>
                        <option value="8">8:00</option>
                        <option value="8.5">8:30</option>
                        <option value="9">9:00</option>
                        <option value="9.5">9:30</option>
                        <option value="10">10:00</option>
                        <option value="10.5">10:30</option>
                        <option value="11">11:00</option>
                        <option value="11.5">11:30</option>
                        <option value="12">12:00</option>
                        <option value="12.5">12:30</option>
                        <option value="13">13:00</option>
                        <option value="13.5">13:30</option>
                        <option value="14">14:00</option>
                        <option value="14.5">14:30</option>
                        <option value="15">15:00</option>
                        <option value="15.5">15:30</option>
                        <option value="16">16:00</option>
                        <option value="16.5">16:30</option>
                        <option value="17">17:00</option>
                        <option value="17.5">17:30</option>
                        <option value="18">18:00</option>
                        <option value="18.5">18:30</option>
                        <option value="19">19:00</option>
                        <option value="19.5">19:30</option>
                        <option value="20">20:00</option>
                        <option value="20.5">20:30</option>
                    </select>
                    {' '}to{' '}
                    <select onChange={(e)=>{this.props.changeEndTime(e.target.value)}}>
                        <option value=""> </option>
                        <option value="6.5">6:30</option>
                        <option value="7">7:00</option>
                        <option value="7.5">7:30</option>
                        <option value="8">8:00</option>
                        <option value="8.5">8:30</option>
                        <option value="9">9:00</option>
                        <option value="9.5">9:30</option>
                        <option value="10">10:00</option>
                        <option value="10.5">10:30</option>
                        <option value="11">11:00</option>
                        <option value="11.5">11:30</option>
                        <option value="12">12:00</option>
                        <option value="12.5">12:30</option>
                        <option value="13">13:00</option>
                        <option value="13.5">13:30</option>
                        <option value="14">14:00</option>
                        <option value="14.5">14:30</option>
                        <option value="15">15:00</option>
                        <option value="15.5">15:30</option>
                        <option value="16">16:00</option>
                        <option value="16.5">16:30</option>
                        <option value="17">17:00</option>
                        <option value="17.5">17:30</option>
                        <option value="18">18:00</option>
                        <option value="18.5">18:30</option>
                        <option value="19">19:00</option>
                        <option value="19.5">19:30</option>
                        <option value="20">20:00</option>
                        <option value="20.5">20:30</option>
                    </select>
                </span>
            </FormGroup>

            <FormGroup>
                <Checkbox inline onChange={(e)=>{this.props.changeDays(1,e.target.checked)}}>Monday</Checkbox>{' '}
                <Checkbox inline onChange={(e)=>{this.props.changeDays(2,e.target.checked)}}>Tuesday</Checkbox>{' '}
                <Checkbox inline onChange={(e)=>{this.props.changeDays(3,e.target.checked)}}>Wednesday</Checkbox>{' '}
                <Checkbox inline onChange={(e)=>{this.props.changeDays(4,e.target.checked)}}>Thursday</Checkbox>{' '}
                <Checkbox inline onChange={(e)=>{this.props.changeDays(5,e.target.checked)}}>Friday</Checkbox>{' '}
                <br/>
                <Checkbox inline onChange={(e)=>{this.props.changeDays(6,e.target.checked)}}>Saturday</Checkbox>{' '}
                <Checkbox inline onChange={(e)=>{this.props.changeDays(7,e.target.checked)}}>Sunday</Checkbox>{' '}
            </FormGroup>

            <FormGroup>
                <ControlLabel>Class ID</ControlLabel>
                <FormControl type="text" onChange={(e)=>{this.props.changeClassId(e.target.value)}}/>
            </FormGroup>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeName:changeScheduleName,
            changeStartTime:changeScheduleStartTime,
            changeEndTime:changeScheduleEndTime,
            changeDays:ChangeScheduleDay,
            changeClassId:changeScheduleClassId
        }
        ,dispatch
    )
}
export default connect(null,mapDispatchToProps)(AddScheduleForm);