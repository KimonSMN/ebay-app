import React from 'react'

const CategoriesPanel = () => {
    const categories = ['Electronics', 'Books', 'Clothing', 'Home', 'Toys', 'Other']

    return (
        <ul className='cursor-pointer '>
            {categories.map((item) => 
                <li className='pb-1 hover:underline'>{item}</li>
            )}
        </ul>
    )   
}

export default CategoriesPanel
