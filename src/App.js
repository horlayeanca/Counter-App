import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
