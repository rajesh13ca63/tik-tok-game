import Counter from "./counter";
import CountItems from "./countitems";
import SearchBar from "./searchbar";

const productList = [
    'Apple',
    'Microsoft',
    'Google',
    'Samsung',
    'Ekstep',
    'Compassites',
    'Infosis',
    'Congnigent',
    'Morgan Stanly'
];

const Count = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Counter />
                    <Counter buttonColor={"green"} borderRadius={"20px"} />
                    <Counter incrementBy={5} buttonColor={"red"} borderRadius={"10px"} />
                    <Counter incrementBy={20} buttonColor={"blue"} borderRadius={"50px"} />
                </div>
                <div className="col-md-4">
                    <h2>Add Items to Display</h2>
                    <CountItems />
                </div>
                <div className="col-md-4 offset-md-1">
                    <SearchBar productList={productList} />
                </div>
            </div>
        </div>
    )
}

export default Count;