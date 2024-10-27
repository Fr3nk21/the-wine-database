import Sidebar from '../components/Sidebar';

const WineStock = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-color1">
      <Sidebar />

      {/* WINE STOCK PAGE */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-20">
          <div className="mb-10">
            <h1 className="mb-6 text-3xl font-bold">Inventory Management</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              doloribus veritatis dolorum voluptatem. Reprehenderit natus
              asperiores possimus harum minima ab provident dolor at repellendus
              necessitatibus dolorum libero iure, numquam totam!
            </p>
          </div>

          {/* SEARCH SECTION */}
          <div>
            <h3>Stock Name</h3>
          </div>

          {/* WINE GRID SECTION */}
        </div>
      </div>
    </div>
  );
};

export default WineStock;
