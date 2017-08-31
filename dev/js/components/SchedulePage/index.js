import React from 'react'
import {connect} from 'react-redux'
import {Table, Panel} from 'react-bootstrap'
import TableBody from './TableBody'
import Button from '../../containers/AddScheduleButton'
import Form from '../../containers/AddScheduleModal'

class SchedulePage extends React.Component{

    componentWillReceiveProps(newPorps) {
        // add events to the schedule table
        console.log("old",this.props,"   new",newPorps)
        newPorps.events.map(
            (event)=>{
                var startId = event.start_time.toString()+"-"+event.event_day.toString();
                var start = document.getElementById(startId);
                var span = (event.end_time-event.start_time)/0.5;
                start.innerHTML=event.name;
                var color = this.props.colors[event.class_id]
                if (color){
                    start.setAttribute('style','background-color:'+color)
                }
                if (span>1){
                    start.setAttribute("rowSpan",span.toString());

                    //delete the covered cell
                    var cellList = Array(span-1).fill().map((element,i)=>i+1);
                    cellList.map((e)=>{
                        var id=(event.start_time+e*0.5).toString()+"-"+event.event_day.toString();
                        var that = document.getElementById(id);
                        if (that){that.parentNode.removeChild(that);}
                    })
                }

            })
    }

    render(){
        return(
            <div className="mainPage">
                <Panel>
                    <Button/>
                    <Form/>
                    <div style={{"width":"80%"}}>
                        <Table striped bordered condensed hover style={{"table-layout":"fixed"}}>
                            <thead>
                                <tr>
                                    <th style={{"width":"4em"}}> </th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <TableBody/>
                        </Table>
                    </div>
                </Panel>
            </div>
        )

    }
}

function mapStateToProps(state) {
    console.log(state,"hereeeeeeeeeeeeeeeeeeeeeeee")
    return {events:state.allEvents, colors:state.allColors}
}

export default connect(mapStateToProps)(SchedulePage)