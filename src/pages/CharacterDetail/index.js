/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacter } from "../../store/CharacterDetail/actions";
import { selectCharacterDetail } from "../../store/CharacterDetail/selectors";

export default () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, fetchCharacter]);

  const characterDetail = useSelector(selectCharacterDetail);

  if (!characterDetail) {
    return "Loading";
  }

  return (
    <div>
      <h4>Character Detail: {characterDetail?.name}</h4>
      <div>
        <p>Name: {characterDetail.name}</p>

        <img src={characterDetail.image} alt={characterDetail.name} />
        <p>
          Species: {characterDetail.species} - Gender: {characterDetail.gender}
        </p>
        <p>Last know location: {characterDetail.location.name}</p>
        <p>Last seen in: {characterDetail.episode.name}</p>
      </div>
    </div>
  );
};
