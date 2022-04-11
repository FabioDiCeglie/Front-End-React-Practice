/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../store/CharactersByLocation/actions";
import { selectCharactersByLocation } from "../../store/CharactersByLocation/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByLocation = useSelector(selectCharactersByLocation);

  if (!charactersByLocation) {
    return "Loading";
  }

  return (
    <div>
      <h4>Characters from location {charactersByLocation?.location}:</h4>
      {charactersByLocation?.charactersByLocationAlive?.map((character) => (
        <div key={character.id}>
          <p>Name: {character.name}</p>
          <img src={character.image} alt={character.name} />
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};
