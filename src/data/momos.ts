import { momoImages } from '../config/images';

export const momos = [
  {
    id: 'steam-veg',
    name: 'Steamed Veg Momos',
    type: 'steam',
    variant: 'veg',
    price: 80,
    description: 'Classic steamed vegetable momos with a delicate wrapper and aromatic filling',
    ingredients: ['Cabbage', 'Carrots', 'Green Onions', 'Ginger', 'Garlic', 'Special Spices'],
    image: momoImages.steamed.veg
  },
  {
    id: 'steam-paneer',
    name: 'Steamed Paneer Momos',
    type: 'steam',
    variant: 'paneer',
    price: 100,
    description: 'Soft steamed momos filled with spiced cottage cheese',
    ingredients: ['Paneer', 'Onions', 'Bell Peppers', 'Ginger', 'Garlic', 'Indian Spices'],
    image: momoImages.steamed.paneer
  },
  {
    id: 'fried-veg',
    name: 'Crispy Fried Veg Momos',
    type: 'fry',
    variant: 'veg',
    price: 90,
    description: 'Crispy fried vegetable momos with a golden-brown exterior',
    ingredients: ['Mixed Vegetables', 'Herbs', 'Spices', 'Ginger-Garlic'],
    image: momoImages.fried.veg
  },
  {
    id: 'kurkure-paneer',
    name: 'Kurkure Paneer Momos',
    type: 'kurkure',
    variant: 'paneer',
    price: 120,
    description: 'Crunchy kurkure-coated momos with rich paneer filling',
    ingredients: ['Paneer', 'Spices', 'Kurkure Coating', 'Special Seasoning'],
    image: momoImages.kurkure.paneer
  },
  {
    id: 'steam-chicken',
    name: 'Steamed Chicken Momos',
    type: 'steam',
    variant: 'chicken',
    price: 110,
    description: 'Juicy steamed chicken momos with aromatic spices',
    ingredients: ['Minced Chicken', 'Onions', 'Ginger', 'Garlic', 'Secret Spice Mix'],
    image: momoImages.steamed.chicken
  },
  {
    id: 'fried-chicken',
    name: 'Crispy Chicken Momos',
    type: 'fry',
    variant: 'chicken',
    price: 120,
    description: 'Golden fried chicken momos with a crispy exterior',
    ingredients: ['Chicken', 'Oriental Spices', 'Green Onions', 'Special Herbs'],
    image: momoImages.fried.chicken
  }
];