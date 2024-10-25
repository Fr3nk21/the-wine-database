// import wineBottleImage from '../assets/wine-bottle.png';
import { FC } from 'react';

interface Characteristics {
  body: string;
  tannins: string;
  acidity: string;
  flavors: string[];
}

interface WineCardProps {
  name: string;
  type: string;
  origin: string;
  characteristics: Characteristics;
  foodPairings: string[];
  price: number;
}

const WineCard: FC<WineCardProps> = ({
  name,
  type,
  origin,
  characteristics,
  foodPairings,
  price,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-semibold">{name}</h3>
        <span
          className={`rounded px-2 py-1 text-sm text-gray-500 text-white ${type === 'White' ? 'bg-amber-500' : 'bg-red-500'}`}
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
  );
};

export default WineCard;
