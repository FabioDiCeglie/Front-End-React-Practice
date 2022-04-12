/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../store/CharactersByDimension/actions";
import { selectCharactersByDimension } from "../../store/CharactersByDimension/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByDimension = useSelector(selectCharactersByDimension);

  if (!charactersByDimension) {
    return "Loading";
  }

  return (
    <div>
      <h4>All character by {charactersByDimension?.dimension}</h4>
      {charactersByDimension?.charactersByDimensionAlive?.map((character) => (
        <div key={character.id}>
          <p>Name: {character.name}</p>
          <img src={character.image} alt={character.name} />
          <p>
            Species: {character.species} - Gender: {character.gender}
          </p>
          <p>Last know location: {character.location.name}</p>
          <p>Last seen in: {character.episode.map((ep) => ep.name)}</p>
        </div>
      ))}
    </div>
  );
};
