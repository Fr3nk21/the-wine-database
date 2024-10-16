import Sidebar from '../components/Sidebar';
import WineCard from '../components/WineCard';

const WineList = () => {
  return (
    <div className="bg-green-500 h-screen flex">
      <Sidebar />

      {/* WINE LIST PAGE */}
      <div className="flex flex-col justify-center p-20">
        <div>
          <h1>Wine List Page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            porro velit nam maxime quas, iste, quod, dolor eum voluptate sit
            placeat ut nemo provident quia ipsum tempora assumenda aut.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {/* WINE 1 */}
            <WineCard />

            {/* WINE 2 */}
            <WineCard />

            {/* WINE 3 */}
            <WineCard />

            {/* WINE 4 */}
            <WineCard />

            {/* WINE 5 */}
            <WineCard />

            {/* WINE 6 */}
            <WineCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineList;
