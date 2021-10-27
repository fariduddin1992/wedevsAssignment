import {COLORS, FONTS, icons, SIZES, images} from '../constants';
export function productListData() {
  
  return [
    {
      id: 1,
      name: 'Blazzer',
      rating: 4.8,
      categories: [5, 7],
      price: 500,
      photo: images.blazzer,
     
     
     
      
    },
    {
      id: 2,
      name: 'Shoe',
      rating: 4.8,
      categories: [2, 4, 6],
      price: 1000,
      photo: images.shoe,
    
    },
    {
      id: 3,
      name: 'Watch',
      rating: 4.8,
      categories: [3],
      price: 1000,
      photo: images.watch,
    },
    {
      id: 4,
      name: 'Blazzer',
      rating: 4.8,
      categories: [8],
      price: 1000,
      photo: images.blazzer,
      duration: '10 - 15 min',
    
    
    
    },
    {
      id: 5,
      name: 'Baby Dress',
      rating: 4.8,
      categories: [1, 2],
      price: 500,
      photo: images.babydress,
    
     
    },
    {
      id: 6,
      name: 'Baby Girl Dress',
      rating: 4.9,
      categories: [9, 10],
      price: 500,
      photo: images.babygirl,
     
   
      
    },
  ];
}

export function categoryData() {
  return [
    {
      id: 1,
      name: 'Neckless',
      image: images.neckless,
    },
    {
      id: 2,
      name: 'Watch',
      image: images.watch,
    },
    {
      id: 3,
      name: 'Shoe',
      image: images.shoe,
    },
    {
      id: 4,
      name: 'Blazzer',
      image: images.blazzer,
    },
    {
      id: 5,
      name: 'Baby Dress',
      image: images.babydress,
    },
    {
      id: 6,
      name: 'Baby Girl',
      image: images.babygirl,
    },
    {
      id: 7,
      name: 'Blazzer',
      image: images.blazzer,
    },
    {
      id: 8,
      name: 'Blazzer',
      image: images.blazzer,
    },
    {
      id: 9,
      name: 'Blazzer',
      image: images.blazzer,
    },
    {
      id: 10,
      name: 'Blazzer',
      image: images.blazzer,
    },
  ];
}
