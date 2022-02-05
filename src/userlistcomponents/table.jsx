import React, {Component} from "react";
import TableHeader from "./tableheader";
import TableBody from "./tablebody";

// const columnLists = [
//     {id: 1, name: 'Name', job: 'Profile'}
// ]

// const usersLists = [
//     columnLists = [{id: 1, name: 'Name', job: 'Profile'}],
//     {id: 1, name: 'Rajesh Gupta', job: 'Software Engineer'},
//     {id: 2, name: 'Charlie', job: 'Janitor'},
//     {id: 3, name: 'Mac', job: 'Bouncer'},
//     {id: 4, name: 'Dee', job: 'Aspiring actress'},
//     {id: 5, name: 'Dennis', job: 'Bartender' }
// ]

const tableData = {
    columnLists: [{id: 1, name: 'Name', job: 'Profile'}],
    usersLists: [{id: 1, name: 'Rajesh Gupta', job: 'Software Engineer'},
    {id: 2, name: 'Charlie', job: 'Janitor'},
    {id: 3, name: 'Mac', job: 'Bouncer'},
    {id: 4, name: 'Dee', job: 'Aspiring actress'},
    {id: 5, name: 'Dennis', job: 'Bartender' } ]
}

class Table extends Component {

    render() {
        return(
            <div>
                <h3>Table</h3>
                <table className="table">
                    <TableHeader columnLists={tableData.columnLists} />
                    <TableBody usersLists={tableData.usersLists} />
                </table>
            </div>
        )
    }
}

export default Table;