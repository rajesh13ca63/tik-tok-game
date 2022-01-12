//import React from "react";

function Square(props) {
    return (
        <button className="square"
        onClick={props.onClick}>
        {props.value}
        </button>
    );
    
}


// class Square extends React.Component {
    

//     render() {
              
//         return (
//             <div>
//                 <button className="square" 
//                     onClick={()=> this.props.onClick()}
//                     >{this.props.value}
//                 </button>
//             </div>
//         )
//     }
// }

export default Square;