import { useState } from "react/cjs/react.development";

const CountItems = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('Apple');

    const addItems = (event) => {
        if(item) {
            setItems([...items,
                {id: items.length, value: item} 
            ]);
            setItem('');
        }
       

    }

    const olSytle = {
        background: "#3399ff",
        padding: "20px"
    }
    
    const liStyle = {
        background: "#cce5ff",
        margin: "5px"
    }

    return (
        <div>
            <h2>hellow items</h2>
            <input type="text" 
            value={item}
            onChange={e => setItem(e.target.value)}
            />
            <div>
                <button type="button" className="btn btn-primary" style={{margin: "10px"} } 
                onClick={addItems}
                >Add Item</button>
            </div>
            <div>
                <h3>Items List</h3>
                {/* <ol>
                   {items.map((item, index)  => {
                        return <li key={index}>{item.value}</li>
                   } )}
                </ol> */}
                <ol style={olSytle}>
                    {items.map(item => (
                        <li key={item.id  } id={item.id} style={liStyle}>{item.value}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default CountItems;