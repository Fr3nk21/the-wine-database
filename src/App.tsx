import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home';
import Dashboard from './pages/Dashboard';
import WineList from './pages/WineList';
import WinePage from './pages/WinePage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

// import './App.css'
// import logo from "./assets/logo.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wine-list" element={<WineList />} />
        <Route path="/wine-page" element={<WinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
