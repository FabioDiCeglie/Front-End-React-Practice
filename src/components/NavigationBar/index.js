import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0px solid black;
  border-radius: 3px;
  text-decoration: none;
`;

export default () => {
  return (
    <Wrapper>
      <Button as="a" href="/">
        Homepage
      </Button>
      <Button as="a" href="/characters/dimension">
        Characters in one dimension
      </Button>
      <Button as="a" href="/characters/location">
        Characters in one location
      </Button>
      <Button as="a" href="/characters/episode">
        Characters in one episode
      </Button>
    </Wrapper>
  );
};
