import { BrowserRouter } from "react-router-dom";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Counter />
      </div>
    </BrowserRouter>
  );
}

export default App;
