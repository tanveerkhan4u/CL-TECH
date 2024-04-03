import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


const Home = () => {
  return (
    <div >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=''>
            <img src="https://www.itcomputerinstitute.com/upload/gallery/155367585327351.jpg" className='mx-auto h-auto w-100' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://lh3.googleusercontent.com/p/AF1QipO-8U0wXa5QcGWPSej-uNC5mWTHdC0iS0u_bfiZ=w1080-h608-p-no-v0" className='mx-auto h-auto w-100' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://content.jdmagicbox.com/comp/kolkata/m8/033pxx33.xx33.160929210019.z5m8/catalogue/computer-programming-center-belgharia-kolkata-computer-training-institutes-8ga2g.jpg" className='mx-auto h-auto w-100' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://content.jdmagicbox.com/comp/kheda/a9/9999p2694.2694.240127173918.s7a9/catalogue/siddh-institute-kheda-camp-kheda-computer-training-institutes-tvfuy02ppe.jpg" className='mx-auto h-auto w-100' alt="" />
          </div>
          <br />
        </SwiperSlide>


      </Swiper>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2  gap-48  mt-5'>
        <div className='text-3xl text-center'>
          <h1 className='text font-bold lg:ml-20 '>WELCOME TO DIGITAL COMPUTER INSTITUTE</h1>
          <p className='text-sm  sm:ml-10 lg:ml-20 text-start mt-3 '>Digital Computer Institute has been registered under the Government of India, working in different fields of Programme & Commercial Training sponsored by the Central Government by taking a vow to approach every class of Youth in the society. The Organization is also certified by ISO 9001: 2015. The Institute & the Organization is also Registered under the Ministry of CR Act 1957, MHRD, Govt. of India, Ministry of Corporate Affairs (MCA), Ministry of Micro, Small & Medium Enterprises (MSME), NCS – National career Service, Ministry of Labour & Employment and Ministry of AYUSH and is accredited to conduct the various fields of technical programs sponsored by both the Govt.
            Digital Computer Institute The main function of the society is to provide higher technical education in nominal charges for every group of society of Urban & Rural areas all over India and get success in computer revolution which is the main dream of Indian Govt.</p>
        </div>
            <div className=''>
          <img src="https://www.digitalcomputerinstitute.com/new/product/category/1632892464871.jpg" className='' alt="" />
          </div>

      </div>
    </div>
  )
}

export default Home
