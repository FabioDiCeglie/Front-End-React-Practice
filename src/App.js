import { Routes, Route } from "react-router-dom";

import DimensionPage from "./pages/Dimension";
import Homepage from "./pages/Homepage";
import LocationPage from "./pages/Location";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters/dimension" element={<DimensionPage />} />
        <Route path="/characters/location" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;
