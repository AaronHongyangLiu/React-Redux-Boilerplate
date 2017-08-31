import React from 'react';
import TableRow from './TableRow'

class TableBody extends React.Component{
    render(){
        return(
            <tbody className="tableBody">
                <TableRow time='6'/>
                <TableRow time='6' half/>
                <TableRow time='7'/>
                <TableRow time='7' half/>
                <TableRow time='8'/>
                <TableRow time='8' half/>
                <TableRow time='9'/>
                <TableRow time='9' half/>
                <TableRow time='10'/>
                <TableRow time='10' half/>
                <TableRow time='11'/>
                <TableRow time='11' half/>
                <TableRow time='12'/>
                <TableRow time='12' half/>
                <TableRow time='13'/>
                <TableRow time='13' half/>
                <TableRow time='14'/>
                <TableRow time='14' half/>
                <TableRow time='15'/>
                <TableRow time='15' half/>
                <TableRow time='16'/>
                <TableRow time='16' half/>
                <TableRow time='17'/>
                <TableRow time='17' half/>
                <TableRow time='18'/>
                <TableRow time='18' half/>
                <TableRow time='19'/>
                <TableRow time='19' half/>
                <TableRow time='20'/>
                <TableRow time='20' half/>
            </tbody>
        )
    }
}

export default TableBody