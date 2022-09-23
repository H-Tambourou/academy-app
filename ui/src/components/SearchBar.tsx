import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    console.log(search);
  }

  return (
    <div className="searchBar">
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search a question..." />
      <button onClick={handleSearch}>
        <BiSearchAlt2 style={{height:"25px", width:"25px", cursor: "pointer"}} />
      </button>
    </div>
  )
}
export default SearchBar;