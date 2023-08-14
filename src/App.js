import "./App.css";
import { Routes, Route } from "react-router-dom";
import Desploy from "./components/Desploy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Desploy />} />
      </Routes>
    </>
  );
}

export default App;
