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
        Characters in dimensions
      </Button>
      <Button as="a" href="/characters/location">
        Characters in locations
      </Button>
      <Button as="a" href="/characters/episode">
        Characters in episodes
      </Button>
    </Wrapper>
  );
};
