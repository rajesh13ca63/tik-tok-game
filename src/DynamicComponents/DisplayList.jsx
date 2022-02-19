const DisplayList = (props) => {
    const outputList = props.outputData;

    const listStyle = {
        color: "red",
        background: "#3399df",
        margin: "8px",
    }
    return (
        <>
            {outputList.map((list, index) => (
                <li key={index}><div style={listStyle}>{list.name} {list.age}</div></li>
            ))}
        </>
    )
}

export default DisplayList;