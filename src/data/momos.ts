import { momoImages } from '../config/images';

export const momos = [
  {
    id: 'steam-veg',
    name: 'Mix Veg Momos',
    type: 'steam',
    variant: 'veg',
    price: 59,
    description: 'Classic steamed vegetable momos with a delicate wrapper and aromatic filling',
    ingredients: ['Cabbage', 'Carrots', 'Green Onions', 'Ginger', 'Garlic', 'Special Spices'],
    image: momoImages.steamed.veg
  },
  {
    id: 'steam-paneer',
    name: 'Paneer Delight Momos',
    type: 'steam',
    variant: 'paneer',
    price: 69,
    description: 'Soft steamed momos filled with spiced cottage cheese',
    ingredients: ['Paneer', 'Onions', 'Bell Peppers', 'Ginger', 'Garlic', 'Indian Spices'],
    image: momoImages.steamed.paneer
  },
  {
    id: 'fried-veg',
    name: 'Crispy Fried Veg Momos',
    type: 'fry',
    variant: 'veg',
    price: 69,
    description: 'Crispy fried vegetable momos with a golden-brown exterior',
    ingredients: ['Mixed Vegetables', 'Herbs', 'Spices', 'Ginger-Garlic'],
    image: momoImages.fried.veg
  },
  {
    id: 'kurkure-veg',
    name: 'Kurkure Veg Momos',
    type: 'kurkure',
    variant: 'veg',
    price: 79,
    description: 'Crispy kurkure momos with a flavorful vegetable filling',
    ingredients: ['Mixed Vegetables', 'Kurkure Coating', 'Spices', 'Herbs'],
    image: momoImages.kurkure.veg
  },
  {
    id: 'kurkure-paneer',
    name: 'Kurkure Paneer Momos',
    type: 'kurkure',
    variant: 'paneer',
    price: 89,
    description: 'Crunchy kurkure-coated momos with rich paneer filling',
    ingredients: ['Paneer', 'Spices', 'Kurkure Coating', 'Special Seasoning'],
    image: momoImages.kurkure.paneer
  },
  {
    id: 'steam-corn-cheese',
    name: 'Corn & Cheese Momos',
    type: 'steam',
    variant: 'corn & cheese',
    price: 79,
    description: 'Juicy steamed corn & cheese momos with aromatic spices',
    ingredients: ['Corn', 'Cheese', 'Onions', 'Ginger', 'Garlic', 'Secret Spice Mix'],
    image: momoImages.steamed.corn
  },
  {
    id: 'fried-paneer',
    name: 'Paneer Delight Momos',
    type: 'fry',
    variant: 'paneer',
    price: 79,
    description: 'Golden fried paneer momos with a crispy exterior',
    ingredients: ['Paneer', 'Oriental Spices', 'Green Onions', 'Special Herbs'],
    image: momoImages.fried.paneer
  },
  {
    id: 'fried-corn-cheese',
    name: 'Crispy Fried Corn & Cheese Momos',
    type: 'fry',
    variant: 'corn & cheese',
    price: 89,
    description: 'Delicious fried corn & cheese momos with a crispy outer layer',
    ingredients: ['Corn', 'Cheese', 'Spices', 'Herbs', 'Ginger-Garlic'],
    image: momoImages.fried.corn
  },
  {
    id: 'kurkure-corn-cheese',
    name: 'Kurkure Corn & Cheese Momos',
    type: 'kurkure',
    variant: 'corn & cheese',
    price: 99,
    description: 'Crunchy kurkure momos filled with corn & cheese goodness',
    ingredients: ['Corn', 'Cheese', 'Kurkure Coating', 'Spices', 'Herbs'],
    image: momoImages.kurkure.corn
  }
];