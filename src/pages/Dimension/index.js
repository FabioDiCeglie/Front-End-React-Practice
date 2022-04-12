/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      {charactersByDimension?.charactersByDimensionAliveLastSeen?.map(
        (character) => (
          <div key={character.id}>
            <p>Name:</p>
            <Link to={`/character/detail/${character.id}`}>
              <p>{character.name}</p>
            </Link>
            <img src={character.image} alt={character.name} />
            <p>
              Species: {character.species} - Gender: {character.gender}
            </p>
            <p>Last known location: {character.location.name}</p>
            <p>Last seen in episode: {character.episode.name}</p>
          </div>
        )
      )}
    </div>
  );
};
