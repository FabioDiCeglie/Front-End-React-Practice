/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  fetchDimensions,
} from "../../store/CharactersByDimension/actions";
import {
  selectCharactersByDimension,
  selectDimensions,
} from "../../store/CharactersByDimension/selectors";
import { Title, Wrapper, Form } from "../../components/components.style";
import CharactersCard from "../../components/CharactersCard";

export default () => {
  const [dimension, setDimension] = useState("Dimension C-137");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDimensions());
    dispatch(fetchCharacters(dimension));
  }, [dispatch, dimension, fetchCharacters, fetchDimensions]);

  const charactersByDimension = useSelector(selectCharactersByDimension);
  const dimensions = useSelector(selectDimensions);

  if (!charactersByDimension && !dimensions) {
    return "Loading";
  }

  return (
    <>
      <Title>Characters alive by dimensions:</Title>

      <Form>
        <label>Choose a dimension:</label>
        <select
          onChange={(e) => setDimension(e.target.value)}
          value={dimension}
        >
          {dimensions?.map((dimension, i) => (
            <option key={i}>{dimension}</option>
          ))}
        </select>
        )
      </Form>

      <Wrapper>
        {charactersByDimension?.length === 0 && (
          <Title>No characters alive in this dimension</Title>
        )}
        {charactersByDimension?.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))}
      </Wrapper>
    </>
  );
};
