import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }

const CharacterList = props => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    const getInfo = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setInfo(response.data.results);
          console.log(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getInfo();
  }, []);

  return (
    <div className="character-list">
      {info.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </div>
  )

  function CharacterDetails({ character }) {
    const { name, status, species, image } = character;
    return (
      <Link to={`/characters/${character.id}`}>
      <div className="character-card">
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Image: {image}</p>
      </div>
      </Link>
    );
  }
}

export default CharacterList;
