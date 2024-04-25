// import React from 'react'
import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Homee() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () =>{
            const response = await fetch("https://urlshortner-back-end.vercel.app/url/getuser", {
              method:"GET",
            //   headers :{
            //     "Content-Type":"application/json",
            //     "x-auth-token" : localStorage.getItem("token")
            //   }
            }); 
            const products = await response.json();
            console.log(products.products)
            if([products]){
              setProducts(products)
            }
        }
        getProducts();
        
      }, [] )

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                <ProductCard />
            </div>
        </section>
    </Fragment>
}

export default Homee