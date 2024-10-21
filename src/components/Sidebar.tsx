import { FaBeer } from 'react-icons/fa';

function Sidebar() {
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
              className="flex flex-row items-center justify-between w-full gap-4 p-4 text-lg font-normal bg-red-500 rounded h-14"
            >
              Home
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className="flex flex-row items-center justify-between w-full gap-4 p-4 text-lg font-normal bg-red-500 rounded h-14"
            >
              Dashboard
              <FaBeer />
            </a>
          </li>
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/wine-list"
              className="flex flex-row items-center justify-between w-full gap-4 p-4 text-lg font-normal bg-red-500 rounded h-14"
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
