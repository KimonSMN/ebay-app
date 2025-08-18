import React from 'react'

const AuctionCard = ({title, imageUrl, price, endTime}) => {

    const timeLeft = calculateTimeLeft(endTime)
  
    return (
    <div className='flex flex-col bg-white shadow-md ml-4 p-4 w-64 rounded-sm'>
        <img src={imageUrl} className='h-64 object-cover w-full pb-2    '/>
        <h3 className='font-bold text-lg'>{title}</h3>
        <span className='text-gray-600'>Current Bid: {price.toLocaleString()}$</span>
        <span className='text-orange-500'>Ends in: {timeLeft}</span>
        <button className="cursor-pointer mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
            Bid
        </button>
    </div>
  )
}

function calculateTimeLeft(endTime) {   
 

    const hours = Math.floor(endTime / 60)
    const minutes = endTime % 60

    if (hours == 0 && minutes === 0 ) return 'Ended'
    if (hours === 0 && minutes <= 1) return 'Less than a minute'
    if (hours === 0) return `${minutes} mins`
    return `${hours}h ${minutes}m`

}

export default AuctionCard
