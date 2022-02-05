const TableBody = (tableData) => {
    console.log('table Data ', tableData);
    return (
        <tbody>
                { 
                    tableData.usersLists.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.job}</td>
                        </tr>
                    ))
                }
        </tbody>
    )
}

export default TableBody;