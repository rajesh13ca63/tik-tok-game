const Scroll = (props) => {
    return (
        <div style={{overFlowy: 'scroll', height: '70vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
