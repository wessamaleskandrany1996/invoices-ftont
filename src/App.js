import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Inventory from "./pages/Inventory";
import Suppliers from "./pages/Suppliers";
import AddUser from "./pages/AddUser";
import Invoices from "./pages/Invoices";
import Login from "./pages/Login";
import Clients from "./pages/Clients";

function App() {
  return (
    <div>
      <NavBar />
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/invoice" element={<Invoices />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
