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
    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
            filterUserList: []
        }
    }

    clickHandle = (event) => {
        this.setState({
            searchName: event.target.value
        })
    }

    render() {
        const filterUserList = tableData.usersLists.filter(user => (
            user.name.toLocaleLowerCase().includes(this.state.searchName.toLocaleLowerCase()) ||
            user.job.toLocaleLowerCase().includes(this.state.searchName.toLocaleLowerCase())
        ))

        return(
            <div>
                <div className="search-text-div">
                    <input type="text" className="serch-text-name" placeholder="Search by name or post"
                    value={this.state.searchName} 
                    onChange={this.clickHandle}
                    />
                </div>
                <table className="table">
                    <TableHeader columnLists={tableData.columnLists} />
                    <TableBody usersLists={filterUserList} />
                </table>
            </div>
        )
    }
}

export default Table;