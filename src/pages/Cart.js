import React from 'react';
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  useTitle('Cart');
  const products = [
    {
      id: 1,
      name: 'Sony Wh-Ch510 Bluetooth Wireless',
      price: 149,
      image: '/images/1001.png',
    },
    { id: 2, name: 'boAt Rockerz 450', price: 49, image: '/images/1002.png' },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((products) => (
          <CartCard key={products.id} products={products} />
        ))}
      </section>
    </main>
  );
};
