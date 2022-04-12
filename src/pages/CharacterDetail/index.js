/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacter } from "../../store/CharacterDetail/actions";

export default () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, fetchCharacter]);

  //   if () {
  //     return "Loading";
  //   }

  return (
    <div>
      <h4>Character Detail</h4>
    </div>
  );
};
