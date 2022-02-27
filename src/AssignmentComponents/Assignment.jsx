import { useState } from "react";
import '../styles/Assignment.css'
import WarningBanner from "../userlistcomponents/warningbanner";
import AssignmentTableBody from "./AssignmentTableBody";
import TableHead from "./TableHead";

const classLists = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 
                    'Class 5', 'Class 6', 'Class 7', 'Class 8', 
                    'Class 9', 'Class 10', 'Class 11', 'Class 12' ];

const subjectLists= [
    {id: '1', subject: 'Physics' },
    {id: '2', subject: 'Chemistry' },
    {id: '3', subject: 'Biology' },
    {id: '4', subject: 'Math' },
    {id: '5', subject: 'Polity' },
    {id: '6', subject: 'History' },
    {id: '7', subject: 'Geography' },
    {id: '8', subject: 'Phychology' },
    {id: '9', subject: 'GK' },
    {id: '10', subject: 'Sociology' },
    
];

const tableColumns= ['#Serial', 'Course', 'Department', 'Questions', 'Grade Card'];

const Assignment = (props) => {
    const [studentClassName, setStudentClassName]= useState(classLists[5]);
    const [subjectName, setSubjectName] = useState(subjectLists[0]['subject']);
    const [questions, setQuestions] = useState('abc');
    const [sectedFile, setSelectedFile] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [warningSuccessMsg, setWarningSuccessMsg] = useState('');

    
    const handleClassChange = (e) => {
        setStudentClassName(e.target.value);
    }

    const handleSubjectName = (e) => {
        setSubjectName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdateSuccess(true);
        if(isEdit && updateId) {
            const updateData = [...assignments];
            var index = assignments.findIndex(obj => obj.id === updateId);
            const tempData = { 'id': updateId,
                                'sclass': studentClassName, 
                                'subject': subjectName, 
                                'question': questions, 
                                'filePath': sectedFile 
                            };
            updateData[index] = tempData;
            setAssignments(updateData);
            setIsEdit(false);
            setWarningSuccessMsg('Data Updated Successfully');
        } else {
            const data = { 'id': (new Date()).getTime(),
                    'sclass': studentClassName, 
                    'subject': subjectName, 
                    'question': questions, 
                    'filePath': sectedFile };
            setAssignments([...assignments, data]);
            setWarningSuccessMsg('Data Submited Successfully');
        }
    }

    /*Reset All Form Values when click on new Assignment Button */
    const handleNewAssignment = (e) => {
        console.log('New Assignment');
        setStudentClassName('');
        setSubjectName('');
        setQuestions('');
        setSelectedFile("");
        setIsEdit(false);
    }

    const handleQuestions = (e) => {
        setQuestions(e.target.value);
    }

    const handleFileChange = (e) => {
        console.log('handle file change', e.target.files['0'].name);
        setSelectedFile(e.target.files['0'].name);
    }

    const onhandleDelete = (id) => {
        const data = assignments.filter(item => item.id !== id );
        setAssignments(data);
    }

    const onhandelEdit = (id) => {
        const data = assignments.filter(item => item.id === id);
        setStudentClassName(data[0].sclass);
        setSubjectName(data[0].subject);
        setQuestions(data[0].question);
        setSelectedFile(data[0].filePath);
        setIsEdit(true);
        setUpdateId(id);
    }
    const onClick1=() => {
        setUpdateSuccess(false);
    }

    return(
        <> 
        <div className="container justify-content-center col-10"
        style={{textAlign:"center", color: "Highlight", background: "wheat"}}>
        <h2>Student Assignment</h2>
        </div>
            {updateSuccess && <WarningBanner warn={updateSuccess} onClick={onClick1} messg={warningSuccessMsg}/>}
            <div className="container justify-content-center col-10" 
            style={{background: "aliceblue", border: "2px solid"}}>
                <form onSubmit={handleSubmit}>
                <div className="row form-group" style={{marginTop: "5px"}}>
                    <div className="col-md-1 offset-1">
                        <label>Course</label>
                    </div>
                    <div className="col-md-2">
                        <select className="form-select" value={studentClassName}
                        onChange={handleClassChange}>
                            <option>--Select--</option>
                            {classLists.map(list =>(
                                <option key={list} value={list}
                                >{list}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-1 offset-1">
                        <label>Department</label>
                    </div>
                    <div className="col-md-2">
                        <select className="form-select" value={subjectName}
                        onChange={handleSubjectName}>
                            <option>--Select--</option>
                            {subjectLists.map(list => (
                                <option key={list.id} value={list.subject}>{list.subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        {sectedFile  && <img src={'/assets/img/'+sectedFile} alt={sectedFile} style={{width: "150px", height:"100px", flex:"right"}} /> }
                    </div>
                </div>
                <div className="row" style={{marginTop: "1rem"}}>
                    <div className="col-md-1 offset-md-1" style={{marginTop: "2rem"}}>
                        <label>Questions</label>
                    </div>
                    <div className="col-md-6">
                        <textarea className="form-control" rows="5" placeholder="Type Questions here.."
                        value={questions} onChange={handleQuestions}></textarea>
                    </div>
                </div>
                <div className="row" style={{marginTop: "2rem"}}>
                    <div className="col-md-2 offset-md-1" >
                        <label>Performance Card</label>
                    </div>
                    <div className="col-md-4">
                        <input type="file" onClick={(e) =>(setSelectedFile(e.target.value = null))}
                        onChange={handleFileChange}></input>
                    </div>
                </div>
                <div className="row" style={{marginTop: "2rem"}}>
                    <div className="col-md-2 offset-md-2">
                        <button type="submit" className="btn btn-primary">{isEdit ? 'Update': 'Submit'}</button>
                    </div>
                    <div className="col-md-2 offset-md-2">
                        <button type="button" className="btn btn-warning"
                        onClick={handleNewAssignment}
                        >New Assig...</button>
                    </div>
                </div>
                </form>
              <div className="row">
                    <table className="table">
                      <thead className="dark" style={{background: "darkseagreen"}}>
                          <TableHead tableColumns={tableColumns}/>
                      </thead>
                      <tbody>
                          <AssignmentTableBody assignments={assignments}
                          onDeleteAssignment = {onhandleDelete} 
                          onEditAssignment = {onhandelEdit}/>
                      </tbody>
                    </table>
              </div>
            </div>
        </>
    )
}

export default Assignment;