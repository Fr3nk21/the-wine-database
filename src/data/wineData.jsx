export const wineTypes = [
  {
    id: 1,
    type: 'Red',
    description: 'Full-bodied wines with rich flavors',
    varieties: [
      {
        name: 'Cabernet Sauvignon',
        origin: 'Bordeaux, France',
        characteristics: {
          body: 'Full',
          tannins: 'High',
          acidity: 'Medium',
          flavors: ['Black Cherry', 'Cedar', 'Vanilla'],
        },
        foodPairings: ['Steak', 'Lamb', 'Strong Cheeses'],
        averagePrice: 25,
      },
      {
        name: 'Merlot',
        origin: 'Bordeaux, France',
        characteristics: {
          body: 'Medium',
          tannins: 'Medium',
          acidity: 'Medium-Low',
          flavors: ['Plum', 'Chocolate', 'Cherry'],
        },
        foodPairings: ['Chicken', 'Pork', 'Pasta'],
        averagePrice: 20,
      },
      {
        name: 'Pinot Noir',
        origin: 'Burgundy, France',
        characteristics: {
          body: 'Light',
          tannins: 'Low',
          acidity: 'High',
          flavors: ['Raspberry', 'Strawberry', 'Earth'],
        },
        foodPairings: ['Salmon', 'Mushrooms', 'Duck'],
        averagePrice: 30,
      },
    ],
  },
  {
    id: 2,
    type: 'White',
    description: 'Crisp and refreshing wines',
    varieties: [
      {
        name: 'Chardonnay',
        origin: 'Burgundy, France',
        characteristics: {
          body: 'Full',
          tannins: 'None',
          acidity: 'Medium',
          flavors: ['Apple', 'Vanilla', 'Butter'],
        },
        foodPairings: ['Fish', 'Poultry', 'Creamy Sauces'],
        averagePrice: 22,
      },
      {
        name: 'Sauvignon Blanc',
        origin: 'Loire Valley, France',
        characteristics: {
          body: 'Light',
          tannins: 'None',
          acidity: 'High',
          flavors: ['Grapefruit', 'Grass', 'Gooseberry'],
        },
        foodPairings: ['Seafood', 'Salads', 'Goat Cheese'],
        averagePrice: 18,
      },
    ],
  },
  {
    id: 3,
    type: 'Sparkling',
    description: 'Effervescent wines perfect for celebrations',
    varieties: [
      {
        name: 'Champagne',
        origin: 'Champagne, France',
        characteristics: {
          body: 'Light',
          tannins: 'None',
          acidity: 'High',
          flavors: ['Apple', 'Citrus', 'Toast'],
        },
        foodPairings: ['Oysters', 'Caviar', 'Light Appetizers'],
        averagePrice: 50,
      },
    ],
  },
];
