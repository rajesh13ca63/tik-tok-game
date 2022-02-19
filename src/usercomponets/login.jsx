import React, { useRef, useState } from "react";

function Longin() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [mobileno, setMobileNo] = useState('');
    const [emailId, setEmailId] = useState('');

    const firstNameRef = useRef();

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Inside handle method', firstNameRef.current);
        firstNameRef.current.focus();
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h3 style={{color: "green"}}>User Login</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" ref={firstNameRef}
                                value={name.firstName} className="form-control"
                                onChange={e => setName({...name, firstName: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" value={name.lastName} className="form-control" 
                                onChange={e => {setName({...name, lastName: e.target.value})}}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mobile No</label>
                                <input type="text" className="form-control"
                                value={mobileno}
                                onChange={e => {setMobileNo(e.target.value)}}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={emailId} className="form-control"
                                onChange={(e) => {setEmailId(e.target.value)}} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" style={{margin: "5px"}}
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Longin;