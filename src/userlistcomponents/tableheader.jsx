const TableHeader = (tableData) => {
    return (
        <thead>
            {
                tableData.columnLists.map(column => (
                    <tr key={column.id}>
                        <th>{column.name}</th>
                        <th>{column.job}</th>
                    </tr>
                ))
            }
        </thead>
    )
}

export default TableHeader;