import { useState, useEffect } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  async function fetchProducts() {
    try {
      const data = await getFeaturedList();
      setProducts(data);
    } catch(error){
      toast.error(error.message);
    }
    
  }
  fetchProducts();
}, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline">Featured Products</h1>
        <div className="flex flex-wrap justify-center lg:flex-row">

          { products.map((product) => (
            <div key={product.id} className="m-4">
            <ProductCard  product={product} />
            </div>
          ))}
       
        </div>
    </section>
  )
}
