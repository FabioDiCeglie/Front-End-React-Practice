/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEpisodes } from "../../store/Episodes/actions";
import { selectEpisodes } from "../../store/Episodes/selectors";
import {
  Title,
  Wrapper,
  WrapperCardsDescription,
} from "../../components/components.style";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  const episodes = useSelector(selectEpisodes);
  console.log(episodes);

  if (!episodes) {
    return "Loading";
  }

  return (
    <>
      <Title>List of all episodes:</Title>
      <Wrapper>
        {episodes?.map((episode) => (
          <WrapperCardsDescription key={episode.id}>
            <h4>{episode.name}</h4>
            <p>Episode: {episode.episode}</p>
            <p>Date: {episode.air_date}</p>
          </WrapperCardsDescription>
        ))}
      </Wrapper>
    </>
  );
};
