import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Componentes/Helper/ProtectedRoute";
import "./App.css";
import "animate.css";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Pedidos from "./Componentes/Pedidos";
import Login from "./Componentes/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="pedidos/*" element={<Pedidos />} />
          {/* <ProtectedRoute path="conta/*" element={<User />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
