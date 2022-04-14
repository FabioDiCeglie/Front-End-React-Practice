import { NavLink } from "react-router-dom";
import {
  WrapperCards,
  Image,
  WrapperCardsDescription,
} from "../../components/components.style";

export default (props) => {
  const { id, image, name, species, gender, location, episode } =
    props.character;

  return (
    <>
      <WrapperCards key={id}>
        <Image src={image} alt={name} />
        <WrapperCardsDescription>
          <NavLink
            to={`/character/detail/${id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <h4>{name}</h4>
          </NavLink>
          <p>Species: </p>
          {species}
          <p>Gender: </p>
          {gender}
          <p>Last known location:</p>
          {location.name}
          <p>Last seen in episode:</p>
          {episode.name}
        </WrapperCardsDescription>
      </WrapperCards>
    </>
  );
};
