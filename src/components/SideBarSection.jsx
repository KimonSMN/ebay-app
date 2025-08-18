import React from 'react'

const SideBarSection = ({title, children}) => {
  return (
    <div>
      <h1 className='text-xl font-bold pb-2'>{title}</h1>
      {children}
    </div>
  )
}

export default SideBarSection
