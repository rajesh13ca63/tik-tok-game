import { useState } from "react";
import OpenModal from "./OpenModal";

const AssignmentTableBody = (props) =>{
    const [show, setShow] = useState(false);
    const [imgName, setImgName] = useState('');
    const [showQuestion, setShowQuestion] = useState(false);

    const handleDelete = (id) => {
        console.log('Inside delete method', id);
        props.onDeleteAssignment(id);
    }

    const handleEdit = (id) => {
       console.log('inside edete button', id);
       props.onEditAssignment(id);
    }
    
    const handleScanedGradeCard = (imgPath) => {
        console.log('handleScanedGradeCard called');
        setShow(true);
        setImgName(imgPath);

    } 
    const hideModal = () => {
        setShow(false);
        console.log('Hide modal called');
    }

    const handleShowCheckbox = (event) => {
        // const target = event.target;
        // console.log('target.checked', target.checked);
        // console.log('target.value', target.value);
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        
        setShowQuestion(event.target.checked);
        console.log('event.target.checked', event.target.checked);
    }

    return(
        <>
            { props.assignments.length>=1 ? props.assignments.map(list =>(
                <tr key={list.id}>
                    <th ><div><input type="checkbox" name="showQuestion" checked={showQuestion} id={list.id}
                    onChange={(event) => handleShowCheckbox(event)}/></div></th>
                    <td >{list.sclass}</td>
                    <td >{list.subject}</td>
                    <td >{list.question.substring(0, 30) + '...'}</td>
                    <td >
                    <span>
                        <OpenModal show={show} handleClose={hideModal}>
                            <p style={{textAlign: 'center', color:'red'}}>Scaned Grade Card</p>
                            <img src={'/assets/img/'+imgName} alt={list.filePath} style={{width: "100%", height:"75%"}} />
                        </OpenModal>
                        <button className="btn btn-sm btn-primary"
                    onClick={() =>handleScanedGradeCard(list.filePath)}>Scaned</button>
                    </span></td>
                    <td >
                        <span><button className="btn btn-success btn-sm"
                        onClick={() => handleEdit(list.id)}>Edit</button></span>
                        <span><button className="btn btn-danger btn-sm" style={{marginLeft:"5px"}}
                        onClick={() => handleDelete(list.id)}>delete</button></span>
                    </td>
                </tr>
            )) : <tr><th>No Record Found</th></tr> }
        </> 
    )
}

export default AssignmentTableBody;