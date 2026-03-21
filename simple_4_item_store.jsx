import { useState } from "react";

const products = [
  { id: 1, name: "Boots", price: 25, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Crafts", price: 30, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Souvenirs", price: 40, image: "https://via.placeholder.com/300" },
  { id: 4, name: "Cosmetics", price: 50, image: "https://via.placeholder.com/300" }
];

export default function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Online Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow p-4">
            <img src={product.image} className="rounded-xl mb-3" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-3">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white rounded-xl py-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 && <p className="text-gray-500">Cart is empty</p>}

        {cart.map((item, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <div className="border-t my-3"></div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
