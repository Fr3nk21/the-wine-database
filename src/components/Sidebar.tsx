import { FaBeer } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col p-10 border-r-4 border-color2 bg-color1">
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
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              Home
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              Dashboard
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
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
