/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../store/CharactersByEpisode/actions";
import { selectCharactersByEpisode } from "../../store/CharactersByEpisode/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByEpisode = useSelector(selectCharactersByEpisode);

  return (
    <div>
      <h4>All character by </h4>
    </div>
  );
};
