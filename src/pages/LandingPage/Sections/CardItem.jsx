// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from '../../../components/ImageSlider';


const CardItem = ({ product }) => {
  return (
  
      <div className='rounded overflow-hidden relative shadow-lg flex flex-col gap-7 pb-2 mb-2'>
        
              <div className="relative">
                <ImageSlider images={product.images} />
                    <div className='hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-15'>
                    </div>
                    {/* <p className='absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out'>
                      new
                    </p> */}
            
                    <p className='text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-1 mr-1 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out'>
                       
                        <small>Favorite</small>
                    </p>
              </div>
              <Link to={`/product/${product._id}`}>
                <div className='px-3 pb-2 '>
                  <p className='font-semibold text-md '>
                    
                  </p>
                  <p
                    className='w-3/4 text-gray-500 mb-3 font-semibold text-md inline-block whitespace-normal  hover:text-red-500 transition duration-500 ease-in-out'>Best
                    {product.title}
                  </p>
                  <p className=' text-red-500 font-semibold text-sm font-medium pb-3'>
                          {product.price}원
                  </p>   
                 
                  
                 
                </div>
              </Link> 
                
       
    </div>
  )
}

export default CardItem