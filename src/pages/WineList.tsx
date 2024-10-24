import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import WineCard from '../components/WineCard';
import Search from '../components/SearchField';
import { wineTypes } from '../data/wineData';

const WineList = () => {
  const allWines = wineTypes.flatMap((type: string) =>
    type.varieties.map((variety: object) => ({
      ...variety,
      wineType: type.type,
    }))
  );

  const [searchResults, setSearchResults] = useState(allWines);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults(allWines);
    }

    const filtered = allWines.filter(
      wine =>
        wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.wineType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.characteristics.flavors.some((flavor: string) =>
          flavor.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    setSearchResults(filtered);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden bg-color1">
      <Sidebar />

      {/* WINE LIST PAGE */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-20">
          <div className="mb-10">
            <h1 className="mb-6 text-3xl font-bold">Wine List Page</h1>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              nostrum porro velit nam maxime quas, iste, quod, dolor eum
              voluptate sit placeat ut nemo provident quia ipsum tempora
              assumenda aut.
            </p>
          </div>

          {/* SEARCH SECTION */}
          <div className="mb-10">
            <Search onSearch={handleSearch} placeholder="Search wine..." />
          </div>

          {/* WINE GRID SECTION */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-10">
              {searchResults.length > 0 ? (
                searchResults.map(wine => (
                  <WineCard
                    key={`${wine.wineType}-${wine.name}`}
                    name={wine.name}
                    type={wine.wineType}
                    origin={wine.origin}
                    characteristics={wine.characteristics}
                    foodPairings={wine.foodPairings}
                    price={wine.averagePrice}
                  />
                ))
              ) : (
                <div className="py-10 text-center text-gray-500 col-span-full">
                  No wines found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineList;
