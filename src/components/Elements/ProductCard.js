import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context/CartContext";
import Placeholder from "../../assets/images/placeholder.png";
import { useEffect, useState } from "react";


export const ProductCard = ({product}) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);
    const {id, name, overview, price, rating, best_seller, poster} = product;

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);

        if(productInCart){
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [cartList, product.id])


  return (
    
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">          
            <Link to={`/products/${id}`} className="relative">
                {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
                <img className="p-8 rounded-t-lg" src={poster ? require(`../../assets/images/${poster}`) : Placeholder} alt={name} />
            </Link>


            <div className="px-5 flex-grow flex flex-col justify-between">
                <Link to={`/products/${id}`}>           
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">{overview}</p>
                </Link>
                
                <div className="flex items-center mt-2.5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Rating rating={rating} />                    
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                </div>
            </div>


            <div className="px-5 pb-5 mt-auto">
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
                        { !inCart && <button onClick={() => addToCart(product)} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${product.in_stock ? "": "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" } >Add to cart +</button>
}                       { inCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "": "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" } >Remove Item <i className="ml-1 bi bi-trash3"></i></button>
}                </div>
            </div>
        </div>

  )
}


