import React, { Suspense, useState } from 'react'
import { ProductsLoader, UsersLoader, InputLoader } from '../../components/skeleton';

// import GetUsers from "../../components/GetUsers";
// import ProductList from "../../components/ProductList";
// import Input from "../../components/Input";

const GetUsers = React.lazy(() => { return new Promise(resolve => 
  setTimeout(() => resolve(import("../../components/GetUsers"))
  , 2000)
    )}
  );
const ProductList = React.lazy(() => { return new Promise(resolve => 
  setTimeout(() => resolve(import("../../components/ProductList"))
  , 2000)
    )}
  );
const Input = React.lazy(() => { return new Promise(resolve => 
  setTimeout(() => resolve(import("../../components/Input"))
  , 2000)
    )}
  );

export const Body = () => {

  // first render

  const [ showProducts, setShowProducts ] = useState(false);
  const [ showCreators, setShowCreators ] = useState(false);

  const [ multiply, setMultiply ] = useState(10);
  const [ divide, setDivide ] = useState(10);
  const [ substract, setSubstract ] = useState(10);
  const [ sum, setsum ] = useState(10);

  // React 18 = 3 renders vs 9 renders with React 17
  const onClickProducts = () => {
    setShowProducts(!showProducts); // second render
    setDivide(divide / 2); // third render
    setSubstract(substract - 1); // fourth render
    setsum(sum + 5); // fifth render
  }

  const onClickCreators = () => {
    setShowCreators(!showCreators); // sixth render
    setDivide(divide / 2); // seventh render
    setSubstract(substract - 1); // eight render
    setsum(sum + 5); // ninth render
  }

  return (
    <>
        <Suspense fallback={ <InputLoader /> }>
          <div className="input">
            <Input />
          </div>
          </Suspense>
          <div className="main">
        <Suspense fallback={ <ProductsLoader /> }>
          <div className="products">
              <ProductList />
            {/* <button onClick={ onClickProducts } className="m-2"> Show Products </button>
            { showProducts && <div>{ <ProductList /> }</div> } */}
          </div>
        </Suspense>
        <Suspense fallback={ <UsersLoader /> }>
          <div className="sidebar">
            <GetUsers />
            {/* <button onClick={ onClickCreators } className="m-2"> Show me who created this </button>
            { showCreators && <div>{ <GetUsers /> }</div> } */}
          </div>
        </Suspense>
      </div>
    </>
  )
}