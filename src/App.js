import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {pages.map((p) => (
            <Route path={p.url} element={p.element} key={p.id} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
