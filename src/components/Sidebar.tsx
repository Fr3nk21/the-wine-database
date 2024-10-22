import { FaBeer } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`flex flex-col border-r-4 border-color2 bg-color1 p-10 transition-all duration-300 ${isOpen ? 'w-96' : 'w-40'}`}
    >
      {isOpen ? (
        <ul>
          <div>
            <img src={logo} alt="logo" className="w-10 h-10 mb-10" />
          </div>
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
      ) : (
        <ul className="flex flex-col items-center">
          <div>
            <img src={logo} alt="logo" className="w-10 h-10 mb-10" />
          </div>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
            >
              <FaBeer />
            </a>
          </li>
        </ul>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 mt-auto ml-auto rounded"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? (
          <FaBeer className="w-6 h-6" />
        ) : (
          <FaBeer className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
