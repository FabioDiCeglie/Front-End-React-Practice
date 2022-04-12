/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <h2>Characters from location {charactersByLocation?.location}:</h2>
      {charactersByLocation?.charactersByLocationAliveLastSeen?.map(
        (character) => (
          <div key={character.id}>
            <p>Name:</p>
            <Link to={`/character/detail/${character.id}`}>
              <p>{character.name}</p>
            </Link>
            <img src={character.image} alt={character.name} />
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Last seen in episode: {character.episode.name}</p>
          </div>
        )
      )}
    </div>
  );
};
