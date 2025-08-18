import React from 'react'

const EntryField = ({ title, placeholder, large }) => {

  return (
    <div className="flex-1 flex flex-col px-4 mb-4">
      <label className="mb-2 text-md font-medium">{title}</label>
      {large ? (
      <textarea className={`border border-gray-300 rounded p-2 w-full resize-none h-32`} placeholder={placeholder} maxlength="300"  />
      ) : (
        <input
          className={`border border-gray-300 rounded p-2 w-full`}
          placeholder={placeholder}
        />
      )}
      
    </div>
  )
}

export default EntryField
