import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      <div className=' md:w-1/2 space-y-8 h-full'>
        <h2 className='text-5xl  font-bold leading-snug text-black '>Buy and Sell Your Books <span className='text-blue-700'>For the Best Prices</span></h2>
        <p className='md:w-4/5'>Welcome to Book Shelf, the ultimate marketplace for book lovers! 
        Buy and sell new and used books across all genres with ease. 
        Find your next favorite read or turn your old books into cash. Sign up today and
         enjoy the joy of buying and selling books with fellow bibliophiles!</p>
           {/* <div>
            <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 
            rounded-s-sm outline-none'></input>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium
             hover:bg-black transition-all ease-in duration-200'>
              Search
            </button>
           </div> */}
      </div>
      <div>
        <BannerCard/>
      </div>
    </div>
 

  </div>
  )
}

export default Banner
