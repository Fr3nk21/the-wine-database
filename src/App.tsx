import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';

import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { Secret } from './pages/Secret';
import { Verify2FA } from './pages/Verify2FA';
import Dashboard from './pages/Dashboard';
import WineList from './pages/WineList';
import WinePage from './pages/WinePage';

// import './App.css'
// import logo from "./assets/logo.png";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify-2fa" element={<Verify2FA />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wine-list" element={<WineList />} />
        <Route path="/wine-page" element={<WinePage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
