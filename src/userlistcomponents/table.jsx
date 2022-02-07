import React, {Component} from "react";
import TableHeader from "./tableheader";
import TableBody from "./tablebody";
import Clock from "../timecomponents/clock";
import WarningBanner from "./warningbanner";

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
            filterUserList: [],
            showWarning: true
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        console.log('handle toggle click callded');
        this.setState({
            showWarning: false
        });
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
                <div>
                   { filterUserList.length <=0 && <WarningBanner warn={this.state.showWarning}
                    onClick={this.handleToggleClick}
                    />
                    }
                </div>
                <div>
                    <Clock />
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