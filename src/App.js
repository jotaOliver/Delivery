import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Componentes/Helper/ProtectedRoute";
import "./App.css";
import "animate.css";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import ModalProduct from "./Componentes/Products/ModalProduct";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/*" element={<ModalProduct />} />
          {/* <ProtectedRoute path="conta/*" element={<User />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
