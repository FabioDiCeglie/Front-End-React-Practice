import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(54, 54, 54);
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  color: white;
  font-size: 15px;
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;
