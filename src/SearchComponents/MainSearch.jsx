import initialDetails from "./InitialDetails";
import Search from "./search";

const MainSearch = () => {
    return(
        <>
        <h1>Main Search</h1>
        <Search details={initialDetails} />
        </>
    )
}

export default MainSearch;