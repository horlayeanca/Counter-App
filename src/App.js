import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Counter />}>
            <Route path="/" element={<useReducer />} />
            <Route path="/counter2" element={<customHook />} />
          </Route>
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
