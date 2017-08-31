import React from 'react'

class TableRow extends React.Component{
    render(){
        if (this.props.half){
            return(
                <tr className="tableRow">
                    <td>{this.props.time+':30'}</td>
                    <td id={this.props.time+'.5-1'}></td>
                    <td id={this.props.time+'.5-2'}></td>
                    <td id={this.props.time+'.5-3'}></td>
                    <td id={this.props.time+'.5-4'}></td>
                    <td id={this.props.time+'.5-5'}></td>
                    <td id={this.props.time+'.5-6'}></td>
                    <td id={this.props.time+'.5-7'}></td>
                </tr>
            )
        }
        return(
            <tr className="tableRow">
                <td>{this.props.time+':00'}</td>
                <td id={this.props.time+'-1'}></td>
                <td id={this.props.time+'-2'}></td>
                <td id={this.props.time+'-3'}></td>
                <td id={this.props.time+'-4'}></td>
                <td id={this.props.time+'-5'}></td>
                <td id={this.props.time+'-6'}></td>
                <td id={this.props.time+'-7'}></td>
            </tr>
        )
    }
}

export default TableRow

TableRow.propTypes = {
    time: React.PropTypes.string.isRequired,
    half: React.PropTypes.bool
}