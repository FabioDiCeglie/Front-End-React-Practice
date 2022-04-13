import { Button, Wrapper } from "./navigation.style";

export default () => {
  return (
    <Wrapper>
      <Button as="a" href="/">
        Homepage
      </Button>
      <Button as="a" href="/episodes">
        Episodes
      </Button>
      <Button as="a" href="/characters/dimension">
        Characters by dimensions
      </Button>
      <Button as="a" href="/characters/location">
        Characters by locations
      </Button>
      <Button as="a" href="/characters/episode">
        Characters by episodes
      </Button>
    </Wrapper>
  );
};
