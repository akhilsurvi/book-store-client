import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic1 from '../assets/male.png'
import proPic2 from '../assets/female.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24 '>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    "'Happy Place' is a heartwarming read with wonderfully developed characters 
                    and a captivating storyline. The blend of romance, friendship, and self-discovery kept me
                     hooked from start to finish. Highly recommended!"
                    </p>
                    <Avatar img={proPic1} alt="avatar of Jese" rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Aarav Khanna</h5>
                    <p className='text-base'> Marketing Manager at Khanna Solutions </p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    "'Hell Bent' is an exhilarating read, packed with suspense and
                     unexpected twists. The characters are complex and the plot is deeply engaging. 
                     It's a dark, thrilling adventure that kept me hooked from start to finish. 
                     Highly recommended for thriller fans!"
                    </p>
                    <Avatar img={proPic2} alt="avatar of Jese" rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Priya Patel</h5>
                    <p className='text-base'> Senior Software Engineer at Mehta Tech Innovators</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    "'House of Flame and Shadow' is a mesmerizing fantasy with rich world-building and unforgettable characters. The plot is filled with intrigue and magic, keeping me hooked till the end. A must-read for fans of immersive and captivating fantasy adventures!"
                    </p>
                    <Avatar img={proPic1} alt="avatar of Jese" rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Aditya Singh</h5>
                    <p className='text-base'> Sales Executive at Singh & Sons Pvt. Ltd</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' >
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    "Holly" weaves a tender narrative of love and healing through its deeply relatable characters and emotive storytelling. It's a heartwarming journey of overcoming loss and finding solace in unexpected places. Truly touching and memorable.
                    </p>
                    <Avatar img={proPic2} alt="avatar of Jese" rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Meera Nambiar </h5>
                    <p className='text-base'>Research Scientist at Nambiar Biotech</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' >
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    ‘Divine Rivals’ is an enthralling blend of mythology and adventure, weaving intricate plots with compelling characters. The clash of gods and mortals is portrayed with depth and excitement, making it a captivating read."
                    </p>
                    <Avatar img={proPic1} alt="avatar of Jese" rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Suresh Kulkarni </h5>
                    <p className='text-base'> Operations Manager at Kulkarni Logistics</p>
                </div>

            </div>
        </SwiperSlide>
    
       
      </Swiper>
        </div>
      
    </div>
  )
}

export default Review
