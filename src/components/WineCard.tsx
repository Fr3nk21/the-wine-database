import wineBottleImage from '../assets/wine-bottle.png';

function WineCard() {
  return (
    <div className="flex flex-row bg-orange-500 p-10 rounded-md">
      <div className="w-40 h-40">
        <img src={wineBottleImage} alt="wine" />
      </div>
      <div className="bg-yellow-500 p-10 rounded-md">
        <h3>Wine Number 1</h3>
        <button>
          <a href="http://localhost:5173/wine-page">Read More</a>
        </button>
      </div>
    </div>
  );
}

export default WineCard;
