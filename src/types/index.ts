export interface Momo {
  id: string;
  name: string;
  type: 'steam' | 'fry' | 'kurkure';
  variant: 'veg' | 'paneer' | 'corn';
  price: number;
  description: string;
  ingredients: string[];
  image: string;
}

export interface Location {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: string;
  phone: string;
}