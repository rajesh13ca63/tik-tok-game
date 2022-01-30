import Counter from "./counter";
import CountItems from "./countitems";

const Count = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Counter />
                    <Counter buttonColor={"green"} borderRadius={"20px"} />
                    <Counter incrementBy={5} buttonColor={"red"} borderRadius={"10px"} />
                    <Counter incrementBy={20} buttonColor={"blue"} borderRadius={"50px"} />
                </div>
                <div className="col-md-6">
                    <h2>Add Items to Display</h2>
                    <CountItems />
                </div>
            </div>
        </div>
    )
}

export default Count;