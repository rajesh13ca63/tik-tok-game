import { useState } from "react";

function Longin() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [mobileno, setMobileNo] = useState('');

    return (
        <div>
            <h2>User Login</h2>
            <div>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={name.firstName} 
                        onChange={e => setName({...name, firstName: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={name.lastName} 
                        onChange={e => {setName({...name, lastName: e.target.value})}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="text" 
                        value={mobileno}
                        onChange={e => {setMobileNo(e.target.value)}}
                        />
                    </div>
                </form>
                {/* <h2>Your First Name: {name.firstName}</h2>
                <h2>Your Last Name: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2> */}
                <h2>Your Mobile No: {mobileno}</h2>
            </div>
        </div>
    )
}

export default Longin;