const Card = ({person}) => {
    
    return(
        <div className="row">
            <div className="col-12">
                <div className="card-deck">
                    <div className="card text-white bg-info m-1" style={{maxWidth: "18rem"}}>
                        <div className="card-header">{person.name}
                        <img src={person.imgPath} alt={person.imgPath} style={{width: "200px", height:"100px", flex:"right"}} />
                        </div>
                            <div className="card-body">
                                <h3>{person.id}</h3>
                                <h5 className="card-title">{person.email}</h5>
                                <p className="card-text">{person.address}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>   
                </div>
            </div>
        </div>  
    )
}

export default Card;