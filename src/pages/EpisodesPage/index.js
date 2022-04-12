/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEpisodes } from "../../store/Episodes/actions";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  //   if () {
  //     return "Loading";
  //   }

  return (
    <>
      <h1>Episodes</h1>
    </>
  );
};
