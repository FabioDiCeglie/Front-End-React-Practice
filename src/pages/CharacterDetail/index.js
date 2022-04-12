/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  //   if () {
  //     return "Loading";
  //   }

  return (
    <div>
      <h4>Character Detail</h4>
    </div>
  );
};
