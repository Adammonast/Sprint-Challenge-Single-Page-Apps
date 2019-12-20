import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/`,
      )
      .then(response => {
        console.log(response.data.results)
        const characters = response.data.results.filter(
          character =>
            character.name
              .toLowerCase()
              .includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="names">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
        {data.map(data => {
          return (
            <div
              className="character-list "
              key={data.id}
            >
              <h2>{data.name}</h2>
              <p>Status: {data.status}</p>
              <p>Species: {data.species}</p>
              <p>Image: {data.image}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
