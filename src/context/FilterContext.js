import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducer";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state,dispatch] = useReducer(FilterReducer, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }

    function bestSeller(products){
        return  state.bestSellerOnly ? products.filter(products => products.best_seller === true) : products;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(products => products.in_stock === true) : products;
    }

    function sort(products) {
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(products => products.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(products => products.rating >= 3);
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(products => products.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(products => products.rating >= 1);
        }
        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

    const value = {
        state,
        dispatch,
        products: filteredProductList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);