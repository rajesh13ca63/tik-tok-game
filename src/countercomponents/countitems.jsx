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

    const deletItem = (id) => {
        const newTodos = items.filter((todo, index) => (
            todo.id !== id
            ));
        setItems(newTodos);
    }

    const editItem = (item) =>{
        console.log('Edit button clicked', item);

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
            <div>
                <input type="text" 
                value={item}
                onChange={(e) => setItem(e.target.value)}
                />
            </div>
            <div>
                <button type="button" className="btn btn-primary" style={{margin: "10px"} } 
                disabled={!item} onClick={addItems}
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
                                <span><button onClick={(e) => deletItem(item.id)} >X</button></span>
                                <span><button onClick={(e) => editItem(item)} >Edit</button></span>
                            </div>
                        )
                    })}
                </ol>
            </div> }
        </div>
    );
}

export default CountItems;