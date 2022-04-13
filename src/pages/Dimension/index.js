/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchCharacters,
  fetchDimensions,
} from "../../store/CharactersByDimension/actions";
import {
  selectCharactersByDimension,
  selectDimensions,
} from "../../store/CharactersByDimension/selectors";
import {
  Title,
  Wrapper,
  WrapperCards,
  Image,
  WrapperCardsDescription,
  Form,
} from "../../components/components.style";

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

  const dimensionsUnique = [...new Set(dimensions.map((tag) => tag.dimension))];

  if (charactersByDimension?.charactersByDimensionAliveLastSeen?.length === 0) {
    return (
      <>
        <Title>Characters by dimensions:</Title>
        <Form>
          <label style={{ color: "white" }}>Choose a location:</label>
          <select
            onChange={(e) => setDimension(e.target.value)}
            value={dimension}
          >
            {dimensionsUnique?.map((dimension, i) => (
              <option key={i}>{dimension}</option>
            ))}
          </select>
          )
        </Form>
        <Title>No Characters in this dimension</Title>
      </>
    );
  }

  return (
    <>
      <Title>Characters by dimensions:</Title>

      <Form>
        <label style={{ color: "white" }}>Choose a location:</label>
        <select
          onChange={(e) => setDimension(e.target.value)}
          value={dimension}
        >
          {dimensionsUnique?.map((dimension, i) => (
            <option key={i}>{dimension}</option>
          ))}
        </select>
        )
      </Form>

      <Wrapper>
        {charactersByDimension?.charactersByDimensionAliveLastSeen?.map(
          (character) => (
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
                <p>Last seen in episode:</p>
                {character.episode.name}
              </WrapperCardsDescription>
            </WrapperCards>
          )
        )}
      </Wrapper>
    </>
  );
};
