import { FaBeer } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="flex flex-col p-10 bg-red-500">
      <div>
        <img />
      </div>
      <div>
        <h2 className="pb-6 text-3xl font-bold">
          Welcome to the Wine Database
        </h2>
        <ul>
          <li className="flex flex-row items-center justify-between mb-4">
            <a href="http://localhost:5173/" className="text-xl font-normal">
              Home
            </a>
            <FaBeer />
          </li>
          <li className="flex flex-row items-center justify-between mb-4">
            <a
              href="http://localhost:5173/dashboard"
              className="text-xl font-normal"
            >
              Dashboard
            </a>
            <FaBeer />
          </li>
          <li className="flex flex-row items-center justify-between mb-4">
            <a
              href="http://localhost:5173/wine-list"
              className="text-xl font-normal"
            >
              Wine List
            </a>
            <FaBeer />
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3>Title</h3>
      </div>
    </div>
  );
}

export default Sidebar;
