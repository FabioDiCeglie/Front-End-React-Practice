/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchCharacters } from "../../store/CharactersByEpisode/actions";
import { selectCharactersByEpisode } from "../../store/CharactersByEpisode/selectors";

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

  const charactersByEpisode = useSelector(selectCharactersByEpisode);

  if (!charactersByEpisode) {
    return "Loading";
  }

  return (
    <>
      <Title>Episode {charactersByEpisode?.episode} characters:</Title>
      <Wrapper>
        {charactersByEpisode?.charactersByEpisodeAlive?.map((character) => (
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
                Last known location: <br />
                {character.location.name}
              </p>
            </WrapperCardsDescription>
          </WrapperCards>
        ))}
      </Wrapper>
    </>
  );
};
