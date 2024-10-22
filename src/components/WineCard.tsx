import wineBottleImage from '../assets/wine-bottle.png';

function WineCard() {
  return (
    <div className="flex flex-row p-5 rounded-md bg-color2">
      <div className="overflow-hidden h-60 w-60">
        <img src={wineBottleImage} alt="wine" />
      </div>
      <div className="p-5 bg-yellow-500 rounded-md">
        <h3 className="text-lg font-bold">Wine Number 1</h3>
      </div>
    </div>
  );
}

export default WineCard;
