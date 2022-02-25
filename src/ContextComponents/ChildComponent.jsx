import { CounterConsumer } from "./CountContext";
import GrandChild from "./GrandChild";

const ChildComponent = (props) => {

    return (
        <>
            <h2>Child Component Loaded</h2>
            
            <CounterConsumer>
                {count => {
                    return <h3>Initial value : {count} </h3>
                }
                }
            </CounterConsumer>
            <button type="button" className="btn btn-primary btn-sm">Increment</button>
            <button type="button" className="btn btn-warning btn-sm" style={{marginLeft: "5px"}}>Decrement</button>
            <GrandChild value={20}/>
        </>
    )
}

export default ChildComponent;