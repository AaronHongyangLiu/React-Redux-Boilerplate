import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {unclickAddSchedule, postEvent, clearTempSchedule} from '../actions/index'
import Form from './AddScheduleForm'

class AddScheduleModal extends React.Component{
    constructor(){
        super();

        this.checkComplete = this.checkComplete.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    checkComplete(){
        var that = this.props.temp;
        return (that.name&&that.start_time&&that.end_time&&that.days&&that.class_id)
    }

    onSuccess(){
        this.props.close();
        if(this.checkComplete()){
            this.props.save(this.props.temp);
        } else {
            this.props.clear();

            alert("form not completed")
        }
    }

    render(){
        return(
            <Modal show={this.props.show.clicked} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form/>
                </Modal.Body>

                <Modal.Footer>
                        <Button bsStyle="success" onClick={this.onSuccess}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {show:state.addSchedule, temp:state.tempEvent}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {close:unclickAddSchedule,save:postEvent,clear:clearTempSchedule},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AddScheduleModal)