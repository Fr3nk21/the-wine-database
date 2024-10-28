import { PiHouseLight } from 'react-icons/pi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiViewList } from 'react-icons/ci';
import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

/* 
- Dashboard: Quick overview of key metrics, Low stock alerts, Pending orders, Sales performance
- Inventory Management: Real-time stock levels, Warehouse locations, Stock transfer between locations, Batch/lot tracking, Temperature and storage conditions
- Product Catalog: Detailed wine information (variety, region, vintage, etc.), Pricing information, Tasting notes, Awards and ratings, Images and marketing materials
- Order Management: Purchase order creation and tracking, Sales order processing, Shipment tracking, Order history, Invoice generation
- Analytics & Reports: Sales trends, Inventory turnover, Revenue analysis, Demand forecasting, Customer purchase patterns
- Partner Management: Supplier profiles, Customer accounts, Distrubutor management, Contact information, Payment terms
*/

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
      {isOpen ? ( // OPEN SIDEBAR
        <ul>
          <div>
            <img src={logo} alt="logo" className="block w-8 h-8 mb-10" />
          </div>

          {/* HOME */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              Home
              <PiHouseLight />
            </a>
          </li>

          {/* DASHBOARD */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              Dashboard
              <LuLayoutDashboard />
            </a>
          </li>

          {/* PRODUCT CATALOG */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/product-catalog"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
            >
              Product Catalog
              <CiViewList />
            </a>
          </li>

          {/* INVENTORY MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/inventory-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              Inventory Management
              <CiViewList />
            </a>
          </li> */}

          {/* ORDER MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/order-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              Order Management
              <CiViewList />
            </a>
          </li> */}

          {/* ANALYTICS & REPORTS */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/analytics-and-reports"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              Analytics & Reports
              <CiViewList />
            </a>
          </li> */}

          {/* PARTNER MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/partner-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              Partner Management
              <CiViewList />
            </a>
          </li> */}
        </ul>
      ) : (
        // CLOSED SIDEBAR
        <ul className="flex flex-col items-center">
          <div>
            <img src={logo} alt="logo" className="w-8 h-8 mb-10" />
          </div>

          {/* HOME */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/') ? 'bg-color2' : 'bg-color1'}`}
            >
              <PiHouseLight />
            </a>
          </li>

          {/* DASHBOARD */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/dashboard"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/dashboard') ? 'bg-color2' : 'bg-color1'}`}
            >
              <LuLayoutDashboard />
            </a>
          </li>

          {/* PRODUCT CATALOG */}
          <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/product-catalog"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-list') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li>

          {/* INVENTORY MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/inventory-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li> */}

          {/* ORDER MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/order-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li> */}

          {/* ANALYTiCS AND REPORTS */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/analytics-and-reports"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li> */}

          {/* PARTNER MANAGEMENT */}
          {/* <li className="flex flex-row items-center justify-between mb-4 rounded bg-color2 active:bg-color4">
            <a
              href="http://localhost:5173/partner-management"
              className={`flex h-14 w-full flex-row items-center justify-between gap-4 rounded p-4 text-lg font-normal hover:bg-color2 ${isActive('/wine-stock') ? 'bg-color2' : 'bg-color1'}`}
            >
              <CiViewList />
            </a>
          </li> */}
        </ul>
      )}

      {/* TOGGLE BUTTON */}
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
