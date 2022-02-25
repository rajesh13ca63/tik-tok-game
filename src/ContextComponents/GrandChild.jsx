import { CounterConsumer } from "./CountContext";


const GrandChild = (props) => {

    return(
        <>
            <h3>Grand child Component Loaded</h3>
            <h4>Initial Value is : {props.value}</h4>
            <CounterConsumer>
                { count => (<h4>Initial Value is : {count}</h4>)}
            </CounterConsumer>
        </>
    )
}

export default GrandChild;