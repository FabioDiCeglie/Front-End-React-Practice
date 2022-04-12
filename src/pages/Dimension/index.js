/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCharacters } from "../../store/CharactersByDimension/actions";
import { selectCharactersByDimension } from "../../store/CharactersByDimension/selectors";

import {
  Title,
  Wrapper,
  WrapperCards,
  Image,
  WrapperCardsImages,
  WrapperCardsDescription,
} from "../../components/components.style";

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
    <>
      <Title>{charactersByDimension?.dimension} characters</Title>
      <Wrapper>
        {charactersByDimension?.charactersByDimensionAliveLastSeen?.map(
          (character) => (
            <WrapperCards key={character.id}>
              <WrapperCardsImages>
                <Image src={character.image} alt={character.name} />
              </WrapperCardsImages>
              <WrapperCardsDescription>
                <Link to={`/character/detail/${character.id}`}>
                  {character.name}
                </Link>
                <p>
                  Species: {character.species} Gender: {character.gender}
                </p>
                <p>
                  Last known location:
                  <br />
                  {character.location.name}
                </p>
                <p>
                  Last seen in episode:
                  <br /> {character.episode.name}
                </p>
              </WrapperCardsDescription>
            </WrapperCards>
          )
        )}
      </Wrapper>
    </>
  );
};
