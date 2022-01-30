import React, {useState} from "react";

const Counter = (props) => {
    const initialCount = 0;
    const [currentCounter, setCurrentCounter] = useState(initialCount);

    const handleCount = (event) => {
        if(props.incrementBy)
            setCurrentCounter(currentCounter+ props.incrementBy);
        else
            setCurrentCounter(currentCounter+1);
    }
    
    const buttonStyle = {
        background: props.buttonColor,
        borderRadius: props.borderRadius
    }

    return (
        <div className="container">
            <div className="col col-md-6" style={{ margin: "10px" }  }>
                <span>{currentCounter}</span>
                <button style={buttonStyle}
                onClick={handleCount}
                >+{ props.incrementBy ? props.incrementBy : '1'}</button>
                <span> By { props.incrementBy ? props.incrementBy : '1'}  </span>
            </div>
        </div>
    )
}


export default Counter;