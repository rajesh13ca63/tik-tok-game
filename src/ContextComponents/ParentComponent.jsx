import { useRef, useState } from "react"
import ChildComponent from "./ChildComponent";
import { CounterProvider } from "./CountContext";

const ParentComponent = () => {
    const inputRef = useRef();
    const initVal = 10;
    const [initialValue, setInitialValue] = useState(initVal);
    const [axis, setAxis] = useState({x:0, y:0});

    const handleDecrementValue = () => {
        setInitialValue(initialValue-1);
        inputRef.current.focus();
        console.log('inputref value', inputRef.current);
    }

    const handleMouseMove = (event) => {
        console.log('mouse move');
        setAxis({x: event.clientX, y: event.clientY});
    }
    
    return(
        <div className="justify-content-center">
            <h1>Parent component loaded</h1>
            <input type="text" ref={inputRef} ></input>
            <h2 style={{color: "green"}}>Initial Value is : {initialValue}</h2>
            <button type="button" className="btn btn-primary btn-sm"
            onClick={() => setInitialValue(initialValue+1)}>Increment</button>
            <input type="button" value="Decrement" className="btn btn-warning btn-sm" style={{marginLeft: "5px"}}
            onClick={handleDecrementValue} />
            <div>
                <CounterProvider value={initialValue}>
                    <ChildComponent />
                </CounterProvider>
            </div>
           
            <div style={{ height: '100vh' }} onMouseMove={(event) =>handleMouseMove(event)}>
                <h1>Move the mouse around!</h1>
                <p>The current mouse position is ({axis.x}, {axis.y})</p>
            </div>
        </div>
    )
}

export default ParentComponent;