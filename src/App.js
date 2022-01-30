import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Componentes/Helper/ProtectedRoute";
import "./App.css";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<User />} /> */}
        </Routes>
      </div>
      <Header />
    </BrowserRouter>
  );
}

export default App;
