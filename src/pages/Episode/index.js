/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCharacters } from "../../store/CharactersByEpisode/actions";
import { selectCharactersByEpisode } from "../../store/CharactersByEpisode/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByEpisode = useSelector(selectCharactersByEpisode);

  if (!charactersByEpisode) {
    return "Loading";
  }

  return (
    <div>
      <h4>All character by episode: {charactersByEpisode?.episode} </h4>
      {charactersByEpisode?.charactersByEpisodeAlive?.map((character) => (
        <div key={character.id}>
          <p>Name:</p>
          <Link to={`/character/detail/${character.id}`}>
            <p>{character.name}</p>
          </Link>
          <img src={character.image} alt={character.name} />
          <p>
            Species: {character.species} - Gender: {character.gender}
          </p>
          <p>Last know location: {character.location.name}</p>
        </div>
      ))}
    </div>
  );
};
