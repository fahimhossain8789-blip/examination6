import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";

const Product = ({ item, cartData, setCartData }) => {
  const isInCart = cartData.some(cartItem => cartItem.id === item.id);

  const handleAddToCart = () => {
    if (isInCart) {
      toast.warning(`${item.name} is already in your cart.`, {
        position: "top-center",
      });
      return;
    }

    setCartData([...cartData, item]);
    toast.success(`${item.name} added to cart successfully 🛒`, {
      position: "top-center",
    });
  };

  // Tag styling helper
  const getTagStyles = (tag) => {
    switch (tag?.toLowerCase()) {
      case "popular":
        return "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[#E1E7FF]";
      case "best seller":
        return "bg-[#FEF3C6] text-yellow-700";
      case "new":
        return "bg-[#DBFCE7] text-green-700";
      default:
        return "";
    }
  };

  return (
    <div className="border border-zinc-300 p-5 rounded-xl relative flex flex-col justify-between space-y-6 transition-all duration-500 hover:shadow-2xl">
      
      {/* Product Tag */}
      {item.tag && (
        <span className={`absolute right-2 top-2 rounded-full px-3 py-1 text-sm ${getTagStyles(item.tag)}`}>
          {item.tag}
        </span>
      )}

      {/* Product Image & Info */}
      <div className="space-y-2 md:space-y-3">
        <img
          src={item.icon}
          alt={item.name}
          className="w-16 h-16 bg-base-100 shadow-sm p-2 rounded-full object-contain"
        />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.name}</h2>
        <p className="text-sm md:text-lg text-zinc-500">{item.description}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">${item.price}</span>
          <span className="text-zinc-500">/ {item.period}</span>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-1">
          {item.features.map((feature, i) => (
            <p key={i} className="flex items-center gap-2 text-zinc-500 text-sm md:text-base">
              <GiCheckMark className="text-green-500" />
              {feature}
            </p>
          ))}
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleAddToCart}
        className={`btn w-full rounded-full transition ${
          isInCart
            ? "btn-primary cursor-not-allowed"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
        }`}
        disabled={isInCart}
      >
        {isInCart ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;