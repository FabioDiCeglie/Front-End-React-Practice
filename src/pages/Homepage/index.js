/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import Img from "./Rick-Morty.png";

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

export default () => {
  return (
    <>
      <div>
        <Image src={Img} />
      </div>
    </>
  );
};
