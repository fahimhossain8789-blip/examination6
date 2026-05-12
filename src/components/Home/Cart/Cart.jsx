import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const CartItem = ({ item, onRemove }) => (
  <div className="flex justify-between items-center border border-zinc-200 rounded-xl p-3">
    <div className="flex items-center gap-3">
      <img
        src={item.icon}
        alt={item.name}
        className="w-20 h-20 p-2 border border-zinc-100 rounded-full object-contain"
      />
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-zinc-500">${item.price}</p>
      </div>
    </div>
    <button
      onClick={() => onRemove(item)}
      className="text-red-500 font-medium hover:underline"
    >
      Remove
    </button>
  </div>
);

const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-20 bg-white border rounded-xl border-zinc-200">
    <MdShoppingCart className="w-20 h-20 animate-pulse text-zinc-400" />
    <p className="text-xl font-bold text-zinc-400 mt-4">Your cart is empty</p>
  </div>
);

const Cart = ({ cartData, setCartData }) => {
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    const filteredData = cartData.filter((i) => i.id !== item.id);
    setCartData(filteredData);
    toast.info(`${item.name} removed from cart 🗑️`, { position: "top-center" });
  };

  const handlePayment = () => {
    if (cartData.length === 0) return;
    setCartData([]);
    toast.success("Payment Successful! Thank you 🙏", { position: "top-center" });
  };

  return (
    <section className="container mx-auto lg:max-w-7xl px-4 md:px-6 lg:px-8 mb-10 md:mb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Your Cart</h2>

      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col gap-4">
          {cartData.map((item) => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl text-zinc-500 font-medium">Total:</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            className="mt-4 w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 font-semibold hover:opacity-90 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;