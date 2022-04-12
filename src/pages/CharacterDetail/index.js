/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../store/CharacterDetail/actions";
import { selectCharacterDetail } from "../../store/CharacterDetail/selectors";
import {
  Title,
  WrapperCardCharacter,
  ImageCharacter,
  WrapperCardDescriptionCharacter,
} from "../../components/components.style";

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
    <>
      <Title>Character Detail: {characterDetail.name}</Title>
      <WrapperCardCharacter>
        <ImageCharacter
          src={characterDetail.image}
          alt={characterDetail.name}
        />
        <WrapperCardDescriptionCharacter>
          <p>Species:</p>
          {characterDetail.species}
          <p>Gender:</p>
          {characterDetail.gender}
          <p>Last known location:</p>
          {characterDetail.location.name}
          <p>Dimension:</p>
          {characterDetail.location.dimension === "unknown"
            ? "Any dimension"
            : characterDetail.location.dimension}
          <p>Last seen in episode: </p>
          {characterDetail.episode.name}
        </WrapperCardDescriptionCharacter>
      </WrapperCardCharacter>
    </>
  );
};
