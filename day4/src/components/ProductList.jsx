import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
const ProductList = () => {
const [products,setProduct] = useState([])

// fetch the data using axios
const fetchProducts = async()=>{
const res = await axios.get("https://fakestoreapi.com/products")
setProduct(res.data)
console.log(res.data,"Data fetch")
}

useEffect(()=>{
    fetchProducts();
},[])

  return (
    <div className='flex flex-wrap gap-5 justify-items-center mt-20'>
{products.map((val,i)=>{
    return(
        <div key={i}>
            <ProductCard title={val.title} image={val.image} price={val.price} description={val.description} category={val.category} rating={val.rating.rate}/>
        </div>
    )
})}
    </div>
  )
}

export default ProductList