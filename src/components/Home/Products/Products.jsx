import { use } from "react";
import Product from "../Product/Product";

const Products = ({promiseData,cartData, setCartData}) => {
    const data =use(promiseData)
    console.log(data)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container lg:max-w-7xl mx-auto py-4 px-4 ">
            {
                data.map(item=><Product item={item} cartData={cartData} setCartData={setCartData} />)
            }
         </div> 
    );
};

export default Products;