import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Error from "./components/Error";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/usereducer" element={<useReducer />} />
            <Route path="/customhook" element={<customHook />} />
          </Route>
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
