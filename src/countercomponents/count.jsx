import Counter from "./counter";

const Count = () => {

    return(
        <div>
            <Counter />
            <Counter buttonColor={"green"} borderRadius={"20px"} />
            <Counter incrementBy={5} buttonColor={"red"} borderRadius={"10px"} />
            <Counter incrementBy={20} buttonColor={"blue"} borderRadius={"50px"} />
        </div>
    )
}

export default Count;