import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  
  const [results, setResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleChange = (e) => {
    clearTimeout(debounceTimeout);
    setSearchTerm(e.target.value);
    setDebounceTimeout(
      setTimeout(() => {
        axios
          .get(`https://api.example.com/search?q=${searchTerm}`)
          .then((response) => {
            setResults(response.data.results);
          });
      }, 500)
    );
  };

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </form>
  );
}

export default SearchBar;
