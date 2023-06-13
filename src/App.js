import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./pages/index";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {pages.map((p) => (
            <Route path={p.url} element={p.element} key={p.id} />
          ))}
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
