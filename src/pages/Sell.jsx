import React from 'react'
import DropdownForm from '../components/DropdownForm'
import EntryField from '../components/EntryField'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Sell = () => {
    return (
    <div className='flex justify-center h-screen'>
        <div className='w-1/3 m-10 border-gray-300 border-1 rounded-sm'>
            <h1 className='m-8 ml-4 mb-0 font-bold text-2xl'>List Your Item</h1>
            <h2 className='text-sm ml-4 mb-2 mt-2 text-gray-500'>Fill out the details below to create your listing. Make sure to include clear photos and accurate descriptions.</h2>
            <div className='m-4 shadow-lg border-1 border-gray-300 max-w rounded-sm bg-white'>
                <h2 className='m-4 mb-2 text-lg font-bold'>Auction Details</h2>
                <div className='flex' >
                    <EntryField title={"Item name"} placeholder={"Name"} large={null}/>
                    <EntryField title={"Buy now price"} placeholder={"(optional)"} large={null}/>
                </div>
                <div className='flex'>
                    <div className='flex-1'>
                        <EntryField title={"First bid"} placeholder={"0.00"} large={null}/>
                    </div>
                    <div className='flex-1'>
                        <DropdownForm 
                            fields={[
                            {
                                label: 'Category',
                                name: 'category',
                                options: ['Books', 'Electronics', 'Clothing']
                            }
                            ]}
                        />
                    </div>
                </div>
                <EntryField title={"Description"} placeholder={"Describe your item in detail. Include any defects, features, or important information buyers should know."} large={true}/>   
                <div className='w-full h-64 p-4 rounded overflow-hidden'>
                    <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false} className='h-full w-full'>
                    <TileLayer
                    attribution='&copy; <a href="https://carto.com/">Carto</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />

                    <Marker position={[51.505, -0.09]}/>
                    </MapContainer>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Sell
