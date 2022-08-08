import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import GetUser from "./GetUser";
import ProductCard from "./ProductCard";
import UserForm from "./UserForm";


const ProductList = () => {

  // useState will create a state variable and a setter function
  const [ showCreators, setShowCreators ] = useState(false);

  // fetch the products
  const getProducts = async() => {
    const response = await fetch('https://peticiones.online/api/products');

    if(!response.ok) {
      throw new Error('Error while fetching products')
    }
    return response.json();
  }


  const { isLoading, status, data, error, isFetching, isIdle, refetch } = useQuery([ 'products' ], getProducts, {
    staleTime: Infinity, // Infinity will keep the data for 5 minutes if used and then delete if it is not
    // enabled: false
  });

  // console.log(data);

  // isIdle will check if the data is idle or not (enable or not)
  if(isIdle) {
    return <button onClick={ refetch } >Fetch Products</button>
  }

  if( isLoading ) {
    return <p>Fetching products</p>
  }

  if(error) {
    return <p>Error</p>
  }

  return (
    <>
      <h2>Product List: { isFetching && <p>Is Fetching</p> }</h2>
      <hr />
      <div>
      { data.results?.map( product => 
        <ProductCard key={product.id} product={ product } />
        )}
      </div>
      { showCreators && <div>{<GetUser />}</div>}
      <button onClick={ () => setShowCreators(!showCreators) } > Show creators </button>
      <UserForm />
    </>
  )
}

export default ProductList