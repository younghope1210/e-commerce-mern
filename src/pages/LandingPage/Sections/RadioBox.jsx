// eslint-disable-next-line no-unused-vars
import React from 'react'

const RadioBox = ({ prices, checkedPrice, onFilters }) => {
  return (
    <div 
    className='p-2 mb-3'
    >
      {prices?.map(price => (
        <div key={price._id}>
            <input 
              checked={checkedPrice === price.array}
              onChange={e => onFilters(e.target.value)}
              type="radio"
              id={price._id}
              value={price._id}
              className='w-4 h-4 accent-gray-700 m-1'
            />
            {" "}
            <label htmlFor={price._id}>
              {price.name}
            </label>
        </div>
      ))}
    </div>
  )
}

export default RadioBox