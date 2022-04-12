/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchCharacters } from "../../store/CharactersByLocation/actions";
import { selectCharactersByLocation } from "../../store/CharactersByLocation/selectors";

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

  const charactersByLocation = useSelector(selectCharactersByLocation);

  if (!charactersByLocation) {
    return "Loading";
  }

  return (
    <>
      <Title>{charactersByLocation?.location} characters:</Title>
      <Wrapper>
        {charactersByLocation?.charactersByLocationAliveLastSeen?.map(
          (character) => (
            <WrapperCards key={character.id}>
              <WrapperCardsImages>
                <Image src={character.image} alt={character.name} />
              </WrapperCardsImages>
              <WrapperCardsDescription>
                <NavLink
                  to={`/character/detail/${character.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>{character.name}</p>
                </NavLink>
                <p>
                  Species: {character.species} <br />
                  Gender: {character.gender}
                </p>
                <p>
                  Last seen in episode: <br />
                  {character.episode.name}
                </p>
              </WrapperCardsDescription>
            </WrapperCards>
          )
        )}
      </Wrapper>
    </>
  );
};
