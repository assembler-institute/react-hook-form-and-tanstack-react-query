import ProductCard from "./ProductCard";
import { useState, useEffect, startTransition } from "react";


const ProductList = () => {

  const [ products, setProducts ] = useState([]);

  const getProducts = async() => {

    const response = await fetch('https://peticiones.online/api/products')

    if(!response.ok) {
      throw new Error('Error while fetching products')
    }
    const data = await response.json();
    console.log(data);
    // startTransition will set a lower priority to the render of the component. Sets
    // a normal priority vs higher priority.
    startTransition(() => setProducts(data.results))
    // return setProducts(data.results);
  }

  useEffect(() => {
    getProducts();
  } , []);

  return (
    <>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList