import React from 'react'
import AuctionSectionTitle from './AuctionSectionTitle'
import AuctionCard from './AuctionCard'
import CategoryPanel from './CategoryPanel'

const MainContent = () => {
  return (
    <div>
        <AuctionSectionTitle>New Auctions</AuctionSectionTitle>
        <div className='flex gap-4 flex-wrap'>
            <AuctionCard title={"Title 1"} price={1200} endTime={90} imageUrl={'https://i-up.gr/wp-content/uploads/2023/12/iPhone12-ProMax-Gold-back.jpg'}/>
            <AuctionCard title={"Title 2"} price={100} endTime={0} imageUrl={'https://5.imimg.com/data5/SELLER/Default/2021/3/HK/WE/VH/51112719/brown-clay-sculpture-statue.jpg'}/>
            <AuctionCard title={"Title 3"} price={30000} endTime={1} imageUrl={'https://vehicle-images.dealerinspire.com/f67f-11001530/thumbnails/large/2HGFE2F2XTH512320/22124bcfd303fe6ed4c56d7e9052d896.png'}/>
        </div>
        <AuctionSectionTitle>Browse Categories</AuctionSectionTitle>
        <div className='flex'>
          <CategoryPanel title="Electronics" imageUrl={'https://assets.kotsovolos.gr/product/306938-b.jpg'}/>
          <CategoryPanel title="Collectibles" imageUrl={'https://www.sneaker10.gr/2850152-product_large/funko-pop-games-pokemon-psyduck-781-vinyl-fig.jpg'}/>
          <CategoryPanel title="Parts & Accessorires" imageUrl={'https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Good_Quality_rims'}/>
          <CategoryPanel title="Fashion" imageUrl={'https://www.coolclub.gr/images/styles/large/CCB2811691_1.jpg'}/>
          <CategoryPanel title="Home & Garden" imageUrl={'https://cdn20.pamono.com/p/g/2/0/2064968_v78018adbd/cab-412-chair-by-mario-bellini-for-cassina-2.jpg'}/>

        </div>

    </div>
  )
}

export default MainContent
