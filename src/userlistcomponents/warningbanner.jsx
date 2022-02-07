function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className="alert alert-danger" style={{textAlign: "center"}}>Warning: No Records found, Try another 
            <span style={{float: "right"}} onClick={props.onClick}>Close</span>
        </div>
    );
}

export default WarningBanner;