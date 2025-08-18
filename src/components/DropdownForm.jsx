import React from 'react'

const DropdownForm = ({ fields }) => {
  return (
    <div className={`flex gap-7.5 px-4 mb-4`}>
      {fields.map(({ label, name, options }) => (
        <div key={name} className="flex-1 flex flex-col">
          <label className="mb-2 text-md font-medium">{label}</label>
          <select name={name} className="border border-gray-300 rounded p-2 w-full">
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default DropdownForm
