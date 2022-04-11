import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/Characters/actions";

import { selectCharactersByDimension } from "../../store/Characters/selectors";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByDimension = useSelector(selectCharactersByDimension);
  console.log(charactersByDimension);

  return (
    <div>
      <h4>All character by</h4>
    </div>
  );
};
