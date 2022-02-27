const OpenModal = ({handleClose, show, children}) => {
    const showHideClassName = show ? 'display-block' : 'display-none';
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div>
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleClose} style={{float: "right", radius: "40px"}}>X</button>
                </div>
                <div>
                    {children}
                </div>
            </section>
        </div>
    )
}

export default OpenModal;