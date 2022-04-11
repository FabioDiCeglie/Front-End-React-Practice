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

  const charactersByLocationAlive = useSelector(selectCharactersByLocation);
  console.log(charactersByLocationAlive);

  return (
    <div>
      <h4>Characters from location {charactersByLocationAlive?.location}:</h4>
    </div>
  );
};
