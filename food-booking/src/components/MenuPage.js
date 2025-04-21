import React from 'react';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  { name: 'Pizza', image: '/pizza.jpeg', price: 10 },
  { name: 'Burger', image: '/burger.jpg', price: 5 },
  { name: 'Sushi', image: '/sushi.jpeg', price: 15 },
  { name: 'Pasta', image: '/pasta.jpeg', price: 12 },
  { name: 'Salad', image: '/salad.jpeg', price: 8 },
  { name: 'Tacos', image: '/tacos.jpeg', price: 9 },
  { name: 'Fries', image: '/fries.jpeg', price: 4 },
  { name: 'Hotdog', image: '/hotdog.jpg', price: 6 },
  { name: 'Steak', image: '/steak.jpeg', price: 20 },
  { name: 'Ice Cream', image: '/icecream.jpg', price: 7 },
  { name: 'Sandwich', image: '/sanswich.jpeg', price: 6 },
  { name: 'Wrap', image: '/wrap.jpeg', price: 8 },
  { name: 'Noodles', image: '/noodles.jpeg', price: 11 },
  { name: 'Ramen', image: '/ramen.jpeg', price: 13 },
  { name: 'Kebab', image: '/kabab.jpeg', price: 14 },
  { name: 'Donut', image: '/donut.jpeg', price: 5 },
  { name: 'Curry', image: '/curry.jpeg', price: 16 },
  { name: 'Pancakes', image: '/pancakes.jpeg', price: 9 },
  { name: 'Waffles', image: '/waffles.jpeg', price: 9 },
  { name: 'Soup', image: '/soup.jpeg', price: 7 },
];

const MenuPage = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/order');
  };

  return (
    <div
      className="min-h-screen p-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      {foodItems.map((item, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 rounded-lg shadow-md flex flex-col justify-between overflow-hidden"
        >
          <div className="w-full aspect-square">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <button
              onClick={handleOrder}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
            >
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
