import Sidebar from '../components/Sidebar';
import WineCard from '../components/WineCard';

const WineList = () => {
  return (
    <div className="flex h-screen bg-color1">
      <Sidebar />

      {/* WINE LIST PAGE */}
      <div className="flex flex-col justify-center p-20">
        <div className="mb-10">
          <h1 className="mb-6 text-3xl font-bold">Wine List Page</h1>
          <p className="text-lg">
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
