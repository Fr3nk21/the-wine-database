import { FC } from 'react';
import { WineCardProps } from '../types/wine';
import france from '../assets/france.png';
import italy from '../assets/italy.png';
import bottle from '../assets/wine-bottle.png';

const WineCard: FC<WineCardProps> = ({
  name,
  type,
  origin,
  characteristics,
  foodPairings,
  price,
  description,
}) => {
  return (
    <div className="flex flex-row p-6 overflow-hidden bg-white rounded-lg shadow-md">
      {/* Left content column */}
      <div className="relative z-10 w-1/3">
        <div className="mb-4">
          <h3 className="mb-3 text-3xl font-bold">{name}</h3>
          <span
            className={`rounded px-2 py-1 text-sm text-white ${type === 'White' ? 'bg-amber-500' : 'bg-red-500'}`}
          >
            {type}
          </span>
        </div>

        <div className="mb-3">
          <p className="text-gray-600">🌎 Origin: {origin}</p>
        </div>

        <div className="mb-3">
          <p className="font-medium">🍷 Characteristics:</p>
          <ul className="text-sm text-gray-600">
            <li>Body: {characteristics.body}</li>
            <li>Tannins: {characteristics.tannins}</li>
            <li>Acidity: {characteristics.acidity}</li>
          </ul>
        </div>

        <div className="mb-3">
          <p className="font-medium">😋 Flavors:</p>
          <p className="text-sm text-gray-600">
            {characteristics.flavors.join(', ')}
          </p>
        </div>

        <div className="mb-3">
          <p className="fon-medium">🍖 Food Pairings:</p>
          <p className="text-sm text-gray-600">{foodPairings.join(', ')}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>

      {/* Central colimn with wine description */}
      <div className="flex items-center justify-center w-1/3 text-center align-middle">
        <p className="text-sm">{description}</p>
      </div>

      {/* Right column with bottle and flag */}
      <div className="relative flex items-center justify-center w-1/3 ml-auto align-middle">
        <img
          src={origin === 'Italy' ? italy : france}
          className="absolute z-0 object-cover scale-150 -right-12 -top-0 max-w-96 -rotate-12 opacity-10"
        />
        <img src={bottle} className="relative z-10 max-w-60" />
      </div>
    </div>
  );
};

export default WineCard;
