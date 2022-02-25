function WarningBanner(props) {
    const alertSuccessClassName = props.messg ? "alert alert-success col-md-4 offset-4" : "alert alert-danger";
    if(!props.warn) {
        return null;
    }
    return (
        <div className={alertSuccessClassName} 
        style={{textAlign: "center"}}>{props.messg ? props.messg : 'Warning: No Records found, Try another' }
            <span style={{float: "right"}} onClick={props.onClick}>Close</span>
        </div>
    );
}

export default WarningBanner;