import React from "react";

class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.var = 0;
    //     this.state = {
    //         value: null
    //     }
    // }
    

    render() {
              
        return (
            <div>
                <button className="square" 
                    onClick={()=> this.props.onClick()}
                    >{this.props.value}
                </button>
            </div>
        )
    }
}

export default Square;