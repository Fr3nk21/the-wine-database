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
    <div className="flex flex-row overflow-hidden rounded-lg bg-white p-6 shadow-md">
      {/* Left content column */}
      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="mb-3 text-3xl font-bold">{name}</h3>
          <span
            className={`rounded px-2 py-1 text-sm text-white ${type === 'White' ? 'bg-amber-500' : 'bg-red-500'}`}
          >
            {type}
          </span>
        </div>

        <div className="mb-3">
          <p className="text-gray-600">Origin: {origin}</p>
        </div>

        <div className="mb-3">
          <p className="font-medium">Characteristics:</p>
          <ul className="text-sm text-gray-600">
            <li>Body: {characteristics.body}</li>
            <li>Tannins: {characteristics.tannins}</li>
            <li>Acidity: {characteristics.acidity}</li>
          </ul>
        </div>

        <div className="mb-3">
          <p className="font-medium">Flavors:</p>
          <p className="text-sm text-gray-600">
            {characteristics.flavors.join(', ')}
          </p>
        </div>

        <div className="mb-3">
          <p className="fon-medium">Food Pairings:</p>
          <p className="text-sm text-gray-600">{foodPairings.join(', ')}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>

      {/* Central colimn with wine description */}
      <div className="items center w-1/3">
        <p>dsds{description}</p>
      </div>

      {/* Right column with bottle and flag */}
      <div className="relative ml-auto">
        <img
          src={origin === 'Italy' ? italy : france}
          className="absolute -right-12 -top-0 z-0 max-w-96 -rotate-12 scale-150 object-cover opacity-10"
        />
        <img src={bottle} className="relative z-10 max-w-60" />
      </div>
    </div>
  );
};

export default WineCard;
