import { Button, Wrapper } from "./navigation.style";

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
