import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { A } from "./A";
import { B } from "./B";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/MiVacuna/CDVCOL/ValCertDigVacsVTJGc2RHVmtYMS9pZXpMSmREYUFqWUsxeUNaa1hrWFc2YkE2U3BDelErbis4bGowNi9kSmlZU3hRT3pEcy9GMklWaGo2R3N0aTA3ZHplcFpaVS9iZytza1NCeWlwM004N1UwazlPa2JNVkE9"
          element={<A />}
        />
        <Route
          path="/MiVacuna/CDVCOL/RonCertDigVacsVTJGc2RHVmtYMS9pZXpMSmREYUFqWUsxeUNaa1hrWFc2YkE2U3BDelErbis4bGowNi9kSmlZU3hRT3pEcy9GMklWaGo2R3N0aTA3ZHplcFpaVS9iZytza1NCeWlwM004N1UwazlPa2JNVkE9"
          element={<B />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
