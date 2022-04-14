/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  fetchLocations,
} from "../../store/CharactersByLocation/actions";
import {
  selectCharactersByLocation,
  selectLocations,
} from "../../store/CharactersByLocation/selectors";
import { Title, Wrapper, Form } from "../../components/components.style";
import CharactersCard from "../../components/CharactersCard";

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
          <CharactersCard character={character} key={character.id} />
        ))}
      </Wrapper>
    </>
  );
};
