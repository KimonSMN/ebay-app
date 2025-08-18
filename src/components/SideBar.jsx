import React from 'react'
import SideBarSection from '../components/SideBarSection.jsx'
import CategoriesPanel from '../components/CategoriesPanel.jsx'

const SideBar = () => {
  return (
    <div className="flex flex-col w-64">
      <div className="rounded-sm m-3 p-5 shadow-md bg-white">
        <SideBarSection title="Categories">
          <CategoriesPanel />
        </SideBarSection>
      </div>

      <div className="rounded-sm m-3 p-5 shadow-md bg-white">
        <SideBarSection title="Filters">
          {/* FiltersPanel goes here */}
        </SideBarSection>
      </div>
    </div>
  )
}


export default SideBar
