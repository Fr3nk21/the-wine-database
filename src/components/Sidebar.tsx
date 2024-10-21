import { FaBeer } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col p-10 border-r-4 bg-color1 border-color2">
      <div>
        <img />
      </div>
      <div>
        <h2 className="pb-6 text-3xl font-bold">
          Welcome to the Wine Database
        </h2>
        <ul>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded bg-red-500 p-4 text-lg font-normal ${isActive('/') ? 'bg-color4 text-white' : 'bg-red-500'}`}
            >
              Home
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded bg-red-500 p-4 text-lg font-normal ${isActive('/dashboard') ? 'bg-color4 text-white' : 'bg-red-500'}`}
            >
              Dashboard
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded bg-red-500 p-4 text-lg font-normal ${isActive('/wine-list') ? 'bg-color4 text-white' : 'bg-red-500'}`}
            >
              Wine List
              <FaBeer />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
