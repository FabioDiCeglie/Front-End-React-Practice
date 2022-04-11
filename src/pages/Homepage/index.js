/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/Characters/actions";

import { selectCharactersByDimension } from "../../store/Characters/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByDimensionAlive = useSelector(selectCharactersByDimension);
  console.log(charactersByDimensionAlive);

  if (!charactersByDimensionAlive) {
    return "Loading";
  }

  return (
    <div>
      <h4>All character by</h4>
    </div>
  );
};
