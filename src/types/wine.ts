export interface Characteristics {
  body: string;
  tannins: string;
  acidity: string;
  flavors: string[];
}

export interface WineVariety {
  name: string;
  origin: string;
  characteristics: Characteristics;
  foodPairings: string[];
  averagePrice: number;
}

export interface WineType {
  id: number;
  type: string;
  description: string;
  varieties: WineVariety[];
}

export interface WineCardProps {
  name: string;
  type: string;
  origin: string;
  description: string;
  characteristics: Characteristics;
  foodPairings: string[];
  price: number;
}
