import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobileno: '',
            topic: "react",
            firstNameError: false
        }    
    }

    topics= ['angularjs', 'react', 'javascript', 'viewjs'];

    handleUserfirstnameChange= (event) => {
       this.setState({
           firstname: event.target.value, firstNameError: false
       });
    }

    handUserlastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleMobilenoChange = (event) => {
        this.setState({
            mobileno: event.target.value
        })
    }

    handleTopics = (event) => {
        this.setState({
            topic: event.target.value
        })
        console.log('Topic', event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(this.state.firstname);
        if(!this.state.firstname) {
            this.setState({
                firstNameError: true
            });
        }
    }

    render() {
        return(
            <div className="container">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="">First Name</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control"
                            placeholder="Enter First Name"
                            value={this.state.firstname}
                            onChange={this.handleUserfirstnameChange}>
                            </input>
                            {this.state.firstNameError && <div style={{color: "red"}}>Enter First Name</div>}
                        </div>
                        <label className="">Last Name</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control"
                            placeholder="Enter Last Name"
                            value={this.state.lastname}
                            onChange={this.handUserlastnameChange}
                            ></input>
                       </div>
                       <div className="form-group row">
                           <label>Email</label>
                           <div className="col-md-4">
                            <input type="email" className="form-control"
                            placeholder="Enter email id"
                            value={this.state.email}
                            onChange={this.handEmailChange}
                            ></input>
                            </div>
                       </div>
                       <div className="form-group row">
                           <label>Mobile No</label>
                           <div className="col-md-4">
                               <input type="text" className="form-control" 
                               placeholder="Enter Mobile No"
                               value={this.state.mobileno}
                               onChange={this.handleMobilenoChange}
                               />
                           </div>
                       </div>
                       <div className="form-group row">
                           <label>Topic</label>
                           <div className="col-md-4">
                                <select value={this.state.topic}
                                onChange={this.handleTopics}>
                                    {/* <option key={this.state.topic}>-select-</option> */}
                                    {/* <option value={this.topics[0]}>Angular</option>
                                    <option value={this.topics[1]}>React Js</option>
                                    <option value={this.topics[2]}>Javascript</option>
                                    <option value={this.topics[3]}>ViewJs</option> */}
                                    {this.topics.map(topic =>(
                                        <option key={topic}>{topic}</option>
                                    ))}
                               </select>
                           </div>
                       </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="col-md-offset-3 col-md-9">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signup;