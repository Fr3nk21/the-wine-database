import { PiHouseLight } from 'react-icons/pi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiViewList } from 'react-icons/ci';
import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`flex flex-col overflow-hidden border-r-4 border-color2 bg-color1 px-5 pb-3 pt-5 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-96 px-5 pb-3' : 'w-20 px-2 pb-3'
      }`}
    >
      {isOpen ? (
        <ul>
          <div>
            <img src={logo} alt="logo" className="block w-8 h-8 mb-10" />
          </div>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              Home
              <PiHouseLight />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              Dashboard
              <LuLayoutDashboard />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
            >
              Wine List
              <CiViewList />
            </a>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col items-center">
          <div>
            <img src={logo} alt="logo" className="w-8 h-8 mb-10" />
          </div>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              <PiHouseLight />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              <LuLayoutDashboard />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li>
        </ul>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mb-3 mt-auto flex flex-row items-center rounded ${isOpen ? 'ml-auto' : 'mx-auto'}`}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? (
          <IoArrowBackOutline className="w-6 h-6" />
        ) : (
          <IoArrowForwardOutline className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
