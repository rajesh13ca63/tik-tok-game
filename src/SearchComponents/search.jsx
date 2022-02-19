import { useState } from "react";
import SearchList from "./SearchList";
import Scroll from "./Scroll";

const Search = ({details}) => {
    const[searchField, setSearchField]= useState("");

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    /*Filter persons data using map on the basis of searchField input */
    const filteredPersons = details.filter(person => {
        return (
            person.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        )
    });

    function searchList(){
        return (
            <SearchList filteredPersons={filteredPersons} />
        )
    }

    return (
        <>
            <section className="garamond">
                <input type="text" placeholder="search person"
                value={searchField}
                onChange={handleChange}
                />
                
                <div className="card-group">
                    {searchList()}
                </div>
            </section>
        </>
    )
}

export default Search;