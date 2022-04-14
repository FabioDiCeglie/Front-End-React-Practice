/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  fetchEpisodes,
} from "../../store/CharactersByEpisode/actions";
import {
  selectCharactersByEpisode,
  selectEpisodes,
} from "../../store/CharactersByEpisode/selectors";
import { Title, Wrapper, Form } from "../../components/components.style";
import CharactersCard from "../../components/CharactersCard";

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
        <label>Choose episode:</label>
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
          <CharactersCard character={character} key={character.id} />
        ))}
      </Wrapper>
    </>
  );
};
