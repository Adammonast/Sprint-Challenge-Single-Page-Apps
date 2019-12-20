import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"

const CharacterCard = (props) => {
  const [info, setInfo] = useState();
  const {id} = useParams();
 
  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      setInfo(response.data.result);
    })
    .catch(error => {
      console.error(error);
    });

  },[id]);

  if (!info) {
    return <div>Loading character information...</div>;
  }

  const { name } = info;
  return (
    <div className="character-card">
      <h2>{name}</h2>
    </div>
  );
}

export default CharacterCard;
