import React, {Component} from "react";

class ProductListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(response => {
                this.setState({
                    error: null,
                    isLoaded: true,
                    items: response
                })
            },
        (error) => {
            console.log('Error', error)
            this.setState({
                isLoaded: false,
                error
            })
        })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return(
            <>
                <h1>Product Componets</h1>
                <ol style={{colir:"red"}}>
                    {items.map(item => (
                        <li key={item.id} style={{color: "red", height: "40px", background:"yellow", margin: "5px"}}>{item.title}</li>
                    ))}
                </ol>
            </>)
        }
    }
}

export default ProductListComponent;