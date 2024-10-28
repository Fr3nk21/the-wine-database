import Sidebar from '../components/Sidebar';
import wineBox from '../assets/wine-box.jpg';

const InvetoryManagement = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-color1">
      <Sidebar />

      {/* INVENTORY MANAGEMENT PAGE */}
      <div className="flex flex-col justify-center p-20">
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-bold">Inventory Management</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
            porro velit nam maxime quas, iste, quod, dolor eum voluptate sit
            placeat ut nemo provident quia ipsum tempora assumenda aut.
          </p>
        </div>

        {/* SEARCH SECTION */}
        <div className="flex flex-row justify-between p-5 bg-green-400">
          <div className="flex flex-row">
            <p>Search Component</p>
            <button>Filter</button>
          </div>

          <div className="flex flex-row gap-3">
            <button className="px-5 py-3 bg-orange-400">Export</button>
            <button className="px-5 py-3 bg-orange-400">New Product</button>
          </div>
        </div>

        {/* PRODUCT SECTION */}
        <div className="flex flex-row justify-between p-5 bg-yellow-400">
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <span>Product Name</span>
          </div>
          <div>
            <span>Company</span>
          </div>
          <div>
            <span>SKU Code</span>
          </div>
          <div>
            <span>Variant</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <div>
            <span>Status</span>
          </div>
          <div>
            <button>...</button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-row items-center justify-between p-5 bg-red-400">
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <img src={wineBox} className="max-w-14" />
          </div>
          <div>
            <span>Product Name</span>
          </div>
          <div>
            <span>Company</span>
          </div>
          <div>
            <span>SKU Code</span>
          </div>
          <div>
            <span>Variant</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <div>
            <span>Status</span>
          </div>
          <div>
            <button>...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvetoryManagement;
