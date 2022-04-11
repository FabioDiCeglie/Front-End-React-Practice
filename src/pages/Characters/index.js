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

  const charactersByDimensionAlive = useSelector(selectCharactersByDimension);

  if (!charactersByDimensionAlive) {
    return "Loading";
  }

  return (
    <div>
      <h4>All character by Fantasy Dimension</h4>
      {charactersByDimensionAlive?.map((character) => (
        <div key={character.id}>
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};
