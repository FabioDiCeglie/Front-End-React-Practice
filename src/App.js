import { Routes, Route } from "react-router-dom";

import DimensionPage from "./pages/Dimension";
import Homepage from "./pages/Homepage";
import LocationPage from "./pages/Location";
import EpisodePage from "./pages/Episode";
import CharacterDetail from "./pages/CharacterDetail";

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

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters/dimension" element={<DimensionPage />} />
        <Route path="/characters/location" element={<LocationPage />} />
        <Route path="/characters/episode" element={<EpisodePage />} />
        <Route path="/character/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  );
}

export default App;
