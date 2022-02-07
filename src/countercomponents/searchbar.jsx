import { useState } from "react/cjs/react.development";
import ListItem from "./listitem";

const SearchBar = (props) => {
    const [searchItem, setSearchItem] = useState('');

    const allProductList = props.productList;
    
    const filterProductList = allProductList.filter(product => (
        product.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    ));
    const searchList = filterProductList.map(product => (
        <ListItem key={product} value={product} />
    ));

    return (
        <div>
            <h3>Search Items</h3>
            <input type="text" value={searchItem}
            onChange={e => setSearchItem(e.target.value)}
            />
            <div>
                <h2>Search Value {searchItem}</h2>
                <ul>
                    {searchList}
                </ul>
            </div>          
        </div>
    )
}

export default SearchBar;