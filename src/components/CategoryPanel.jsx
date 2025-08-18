import React from 'react'

const CategoryPanel = ({title,imageUrl}) => {
  return (
    <div className='flex-col cursor-pointer text-center m-4'>
        <img src={imageUrl} className='object-cover bg-white rounded-[50%] w-64 h-64 p-4'/>
        <h2 className='font-bold text-lg'>{title}</h2>
    </div>
  )
}

export default CategoryPanel
