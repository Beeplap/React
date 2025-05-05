import React from 'react'

const ProductCard = ({title,image,price,category,rating}) => {
  return (
    <div className='overflow-hidden ml-4 h-106 w-91 border rounded-md bg-white shadow-md flex flex-col gap-2 p-4'>
      <div className='mx-auto '> <img  src={image} alt='products' className='w-52 h-52 rounded-md mx-auto'/></div>
      <div className="truncate " title={title} >
  {title}
</div>

      <div className=' capitalize'>{category}</div>
      <div className='flex justify-between items-center'>
      <p>${price}</p>
      <p>{rating}⭐</p>
      </div>
      
      <button className='p-3 w-full bg-blue-400 rounded'>Add to cart</button>
    </div>
  )
}

export default ProductCard