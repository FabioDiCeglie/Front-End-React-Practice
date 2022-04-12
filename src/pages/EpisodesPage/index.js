/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEpisodes } from "../../store/Episodes/actions";
import { selectEpisodes } from "../../store/Episodes/selectors";

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
      <h1>List of all episodes:</h1>
    </>
  );
};
