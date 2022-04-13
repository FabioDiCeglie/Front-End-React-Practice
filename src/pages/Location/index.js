/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchCharacters,
  fetchLocations,
} from "../../store/CharactersByLocation/actions";
import {
  selectCharactersByLocation,
  selectLocations,
} from "../../store/CharactersByLocation/selectors";
import {
  Title,
  Wrapper,
  WrapperCards,
  Image,
  WrapperCardsDescription,
  Form,
} from "../../components/components.style";

export default () => {
  const [location, setLocation] = useState("Earth (C-137)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchCharacters(location));
  }, [dispatch, location, fetchCharacters, fetchLocations]);

  const charactersByLocation = useSelector(selectCharactersByLocation);
  const locations = useSelector(selectLocations);

  if (!charactersByLocation && !locations) {
    return "Loading";
  }

  return (
    <>
      <Title>Characters alive by location:</Title>

      <Form>
        <label>Choose a location:</label>
        <select onChange={(e) => setLocation(e.target.value)} value={location}>
          {locations?.map((location, i) => (
            <option key={i}>{location.name}</option>
          ))}
        </select>
        )
      </Form>

      <Wrapper>
        {charactersByLocation?.length === 0 && (
          <Title>No characters alive in this location.</Title>
        )}
        {charactersByLocation?.map((character) => (
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
              <p>Last seen in episode:</p>
              {character.episode.name}
            </WrapperCardsDescription>
          </WrapperCards>
        ))}
      </Wrapper>
    </>
  );
};
