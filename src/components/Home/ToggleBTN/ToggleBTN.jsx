import React, { useEffect, useState } from "react";

const ToggleBTN = ({
  productsFetch,
  cartData,
  active,
  setActive,
  scrollToProducts,
  scrollToCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mt-5 md:mt-16 lg:mt-24 container lg:max-w-7xl  mx-auto sticky -top-25 z-10 transition-all duration-300 ${isScrolled ? "bg-white " : "bg-transparent py-8"}`}
    >
      <div className="py-4 md:py-5 lg:py-7  px-4 md:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold md:text-4xl lg:text-6xl">
        Premium Digital Tools
      </h1>
      <p className="text-center py-2 md:py-5">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      </div>
      <div className="flex gap-2 items-center justify-center my-5 md:my-8">
        <div className="border border-zinc-100 p-2 rounded-full">
          <button
            onClick={() => {
              setActive("active");
              scrollToProducts();
            }}
            className={`btn md:btn-xl rounded-full w-40 ${active === "active" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}`}
          >
            Products
          </button>
          <button
            onClick={() => {
              setActive("cart");
            }}
            className={`btn md:btn-xl  rounded-full w-40 ${active === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}`}
          >
            Cart {cartData.length > 0 && <p>({cartData.length})</p> }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleBTN;
