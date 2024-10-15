import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { Secret } from './pages/Secret';
import { Verify2FA } from './pages/Verify2FA';
import Dashboard from './pages/Dashboard';

import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';

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
      </Routes>
    </AuthProvider>
  );
}

export default App;
