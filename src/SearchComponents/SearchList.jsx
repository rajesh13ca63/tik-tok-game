import Card from "./Card";

const SearchList = ({filteredPersons}) => {
    const filteredData = filteredPersons.map(person => (
        <Card key={person.id} person={person} />
    ));
 
    return(
        <>
            {filteredData}
        </>
                    
               
    )
}

export default SearchList;