import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import Navbar from "./components/Home/Navbar/Navbar";
import Stats from "./components/Home/Stats/Stats";
import ToggleBTN from "./components/Home/ToggleBTN/ToggleBTN";
import Products from "./components/Home/Products/Products";
import { useRef, useState } from "react";
import Cart from "./components/Home/Cart/Cart";
import Steps from "./components/Home/Steps/Steps";
import Product from "./components/Home/Product/Product";
import Pricing from "./components/Home/Pricing/Pricing";
import Transform from "./components/Home/Transform/Transform";
import Footer from "./components/Home/Footer/Footer";

const productsFetch = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const promiseData = productsFetch();
function App() {
  const [active, setActive] = useState("active");
  const [cartData, setCartData] = useState([]);


  const productRef =useRef(null)


const scrollToProducts =()=>{
  setTimeout(()=>{
    if(productRef.current){
      const headerOffset = 220
      const elementPosition =productRef.current.getBoundingClientRect().top
      console.log(elementPosition)
      const offsetPosition = elementPosition+window.scrollY-headerOffset
      window.scrollTo({
        top:offsetPosition,
        behavior:'smooth'
      })
    }
   },80)
}



  return (
    <>
      <Navbar cartData={cartData} />
      <Banner />
      <Stats />
      <ToggleBTN
        promiseData={promiseData}
        cartData={cartData}
        active={active}
        setActive={setActive}
        scrollToProducts={scrollToProducts}
      />
      <div ref={productRef}>
        {
          active==='active' &&  <Products
          promiseData={promiseData}
          cartData={cartData}
          setCartData={setCartData}
        />
        }
      </div>
        {
          active === 'cart' &&  <Cart cartData={cartData} setCartData={setCartData} />
        }
      
      {
        active==='active' && <div>

          <Steps/>
          <Pricing/>
          <Transform/>
          <Footer/>
        </div>
      }
    </>
  );
}

export default App;
