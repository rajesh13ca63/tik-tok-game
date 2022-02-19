import { useEffect, useState } from "react";

const ProductListFunction = (props) => {
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/todos";

    const liStyle = {color: "red", height: "40px", background:"#20c997", margin: "5px"}
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (response) => {
            setItems(response);
            setIsLoaded(true);
        },
        (error) => {
            setError(error);
            setIsLoaded(true);
        })
    }, []);//[] This is used to load only once //
     
    if(error) {
        return <div><p>Error: {error}</p></div>
    } else if(!isLoaded) {
        return <p>Loading</p>
    } else {
        return (
            <>
                <ol>
                    {items.map(item => (
                        <li key={item.id} style={liStyle}>{item.title}</li>
                    ))}
                </ol>
            </>
        )
    }
}

export default ProductListFunction;