import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductCatalog from './pages/ProductCatalog';
import InventoryManagement from './pages/InventoryManagement';
import Login from './pages/Login';
import WineStock from './pages/WineStock';

// import PrivateRoute from './components/PrivateRoute';

// import './App.css'
// import logo from "./assets/logo.png";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          // <PrivateRoute>
          <Dashboard />
          // </PrivateRoute>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product-catalog" element={<ProductCatalog />} />
      <Route path="/inventory-management" element={<InventoryManagement />} />
      <Route path="/wine-stock" element={<WineStock />} />
    </Routes>
  );
}

export default App;
