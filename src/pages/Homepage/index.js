/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import Img from "./Rick-Morty.png";

const Image = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <>
      <Image src={Img} />
    </>
  );
};
