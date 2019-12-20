import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/`,
      )
      .then(response => {
        console.log(response)
        const characters = response.data.result.filter(
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
      <div className="spell">
        {data.map(data => {
          return (
            <div
              className="character-list "
              key={data.result.id}
            >
              <h2>
                {data.result.name}
              </h2>
              <h3>
                Status: {data.result.status}
              </h3>
              <h3>
                Species: {data.result.species}
              </h3>
              <h3>
                Image: {data.result.image}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
