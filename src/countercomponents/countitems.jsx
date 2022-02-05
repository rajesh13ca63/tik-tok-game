import { useState } from "react/cjs/react.development";

const CountItems = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('Apple');

    const addItems = (event) => {
        if(item) {
            setItems([...items,
                {id: 'id' + (new Date()).getTime(), value: item} 
            ]);
            setItem('');
        }
    }

    const deletItem = (item) => {
        const newTodos = items.filter((todo, i) => todo.id !== item.id);
        setItems(newTodos);
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
            {items.length>0 && <div>
                <h3>Items List</h3>
                {/* <ol>
                   {items.map((item, index)  => {
                        return <li key={index}>{item.value}</li>
                   } )}
                </ol> */}
                <ol style={olSytle}>
                    {items.map(item => {
                       return ( 
                           <div key={item.id}>
                                <li key={item.id } style={liStyle}>{item.value}</li>
                                <span><button onClick={(e) => deletItem(item)}>X</button></span>
                            </div>
                        )
                    })}
                </ol>
            </div> }
        </div>
    );
}

export default CountItems;