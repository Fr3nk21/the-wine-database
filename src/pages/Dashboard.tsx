import { FaBeer } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex h-screen bg-green-500">
      <Sidebar />

      {/* DASHBOARD PAGE */}
      <div className="flex flex-col justify-center p-20">
        <div className="mb-10">
          <h1 className="mb-6 text-3xl font-bold">Title of dashboard</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            porro velit nam maxime quas, iste, quod, dolor eum voluptate sit
            placeat ut nemo provident quia ipsum tempora assumenda aut.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {/* SECTION 1 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Wines in stock</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Order to send out</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>

            {/* SECTION 3 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Out of stock</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>

            {/* SECTION 4 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Wines sold this week</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>

            {/* SECTION 5 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Wines sold this month</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>

            {/* SECTION 6 */}
            <div className="flex flex-col p-6 bg-orange-500 rounded-md">
              <h3 className="text-xl font-medium">Wines sold this year</h3>
              <div className="ml-auto">
                <button className="flex flex-row items-center gap-3">
                  See More <FaBeer />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
