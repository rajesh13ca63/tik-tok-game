const TableHead = ({tableColumns}) => {
    console.log('tableColumns', tableColumns);
    return (
        <>
            <tr key="assignment">
                { tableColumns.map((column, index) =>(
                    <th key={index}>{column}</th>
                ))}
                <th>Action</th>
            </tr>
        </>
    )
}

export default TableHead;

