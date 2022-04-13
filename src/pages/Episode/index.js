/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchCharacters,
  fetchEpisodes,
} from "../../store/CharactersByEpisode/actions";
import {
  selectCharactersByEpisode,
  selectEpisodes,
} from "../../store/CharactersByEpisode/selectors";
import {
  Title,
  Wrapper,
  WrapperCards,
  Image,
  WrapperCardsDescription,
  Form,
} from "../../components/components.style";

export default () => {
  const [episode, setEpisode] = useState(21);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
    dispatch(fetchCharacters(episode));
  }, [dispatch, episode, fetchCharacters, fetchEpisodes]);

  const charactersByEpisode = useSelector(selectCharactersByEpisode);
  const episodes = useSelector(selectEpisodes);

  if (!charactersByEpisode && !episodes) {
    return "Loading";
  }

  return (
    <>
      <Title>Characters alive by episodes:</Title>

      <Form>
        <label style={{ color: "white" }}>Choose episode:</label>
        <select onChange={(e) => setEpisode(e.target.value)} value={episode}>
          {episodes?.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.name}
            </option>
          ))}
        </select>
        )
      </Form>
      <Wrapper>
        {charactersByEpisode?.map((character) => (
          <WrapperCards key={character.id}>
            <Image src={character.image} alt={character.name} />
            <WrapperCardsDescription>
              <NavLink
                to={`/character/detail/${character.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <h4>{character.name}</h4>
              </NavLink>
              <p>Species: </p>
              {character.species}
              <p>Gender: </p>
              {character.gender}
              <p>Last known location:</p>
              {character.location.name}
            </WrapperCardsDescription>
          </WrapperCards>
        ))}
      </Wrapper>
    </>
  );
};
