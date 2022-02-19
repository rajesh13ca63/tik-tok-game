import { useState } from "react";
import DisplayList from "./DisplayList";

const DynamicInput = () => {
    const[inputFields, setInputFields] = useState([{name: '', age: ''}]);
    const[displaytList, setOutputList] = useState([{}]);

    const handelInputChange =(index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addMoreField = () => {
        const newField = {name: '', age: ''};
        setInputFields([...inputFields, newField ])
    }

    const deleteInputFiled = (id) => {
        console.log('Delete method called, index', id);
        let data = [...inputFields];
       //data.splice(id, 1);
        data = data.filter((input, index) => (
            id !==index
        ));
        setInputFields(data);
    }
    
    const submitInputData = (e) => {
        e.preventDefault();
        let outputList = [...inputFields];
        setOutputList(outputList);
    }

    return(
        <>
        <div className="row">
            <div className="col-md-6">
                <span><label>Action</label></span>
                <form onSubmit={submitInputData}>
                    { inputFields.map((inputField, index) => {
                        return <div key={index}>
                            <div className="form-group row" style={{margin: "10px"}}>
                                <div className="col-md-4">
                                    <label>Name</label>
                                    <input type="text" name="name" value={inputField.name} className="form-control"
                                    onChange={(event) => handelInputChange(index, event)} />
                                </div>
                                <div className="col-md-2">
                                    <label>Age</label>
                                    <input type="text" name="age" value={inputField.age} className="form-control" 
                                    onChange={(event) => handelInputChange(index, event)}/>
                                </div>
                                <div className="col-md-2" style={{marginTop:"24px"}}>
                                    <button className="btn btn-danger"
                                    onClick={() => deleteInputFiled(index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    })}
                    <button className="btn btn-success btn-sm" style={{marginLeft:"5rem"}}
                    onClick={addMoreField}>Add More...</button>
                    <button type="submit" className="btn btn-primary btn-sm" style={{margin:"10px"}}>Submit</button>
                </form>
            </div>
            <div className="col-md-6">
             <h3>Added Data</h3>
                <table>
                    <tbody>
                        <tr>
                            <th style={{padding: "20px"}}>Name</th>
                            <th style={{padding: "20px"}}>Age</th>
                        </tr>
                    </tbody>
                </table>
                <ol>
                    { inputFields.length>1 && <DisplayList outputData={displaytList} /> }
                </ol>
            </div>
            
        </div>
        </>
    )
}

export default DynamicInput;