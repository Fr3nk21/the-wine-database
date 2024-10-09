import "./styles.css";
import logo from "./assets/logo.png";
import AuthProvider from "./hooks/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/route";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
      <Header />
      <Hero />
      <div>Hello Wine Database</div>
    </div>
  );
}

// HEADER COMPONTENT
export function Header() {
  return (
    <section className="flex flex-row justify-between h-20 bg-red-500 items-center border-b-2 border-b-green-600">
      <div>
        <img src={logo} alt="logo application" className="max-w-10 ml-5" />
      </div>
      <div>
        <ul className="flex flex-row gap-4 mr-5">
          <li className="px-4 py-2 bg-yellow-500 rounded-md">Home</li>
          <li className="px-4 py-2 bg-yellow-500 rounded-md">About</li>
          <li className="px-4 py-2 bg-yellow-500 rounded-md">Product</li>
          <li className="px-4 py-2 bg-yellow-500 rounded-md">Contact</li>
          <li className="px-4 py-2 bg-yellow-500 rounded-md">Login</li>
          <li className="px-4 py-2 bg-yellow-500 rounded-md">Signin</li>
        </ul>
      </div>
    </section>
  );
}

// HERO COMPONENT
export function Hero() {
  return (
    <section className="flex flex-row justify-center items-center w-full h-screen bg-green-500">
      <div className="w-2/3 justify-center h-96 bg-yellow-500 flex flex-col items-center">
        <h1>Hello World</h1>
        <p className="text-center max-w-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi
          amet porro quae placeat sit dolor cum accusantium nobis vitae
          quibusdam exercitationem cumque dolore reiciendis libero optio, quod
          pariatur provident!
        </p>
        <div>
          <button className="px-4 py-2 bg-purple-500 rounded-md">
            Learn More
          </button>
          <button className="px-4 py-2 bg-purple-500 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
