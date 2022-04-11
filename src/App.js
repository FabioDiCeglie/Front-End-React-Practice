import { Routes, Route } from "react-router-dom";

import CharactersPage from "./pages/Characters";
import Homepage from "./pages/Homepage";
import LocationPage from "./pages/Location";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;
