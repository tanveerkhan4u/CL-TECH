import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";




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
      <div className='sm:container  mt-5 rounded-lg mx-auto bg-[#04AA6D]'>
        <div className='grid grid-cols-1  p-4 mb-5'>
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <h1 className='text-md text-white'>free government computer courses franchise* govt free computer education franchise* computer institute franchise* computer education franchise in village area* govt computer education franchise* computer center franchise* free franchise for computer center* govt schemes for computer education* ngo scheme for computer education* mputer training institute franchise* computer institute franchise absolutely free* free computer education scheme* govt project for computer education* computer training franchise* computer institute franchise* computer courses franchise* free computer center franchise* ngo franchise for computer education* government franchise for computer institute* most profitable computer education franchises* free computer education by ngo* franchise of educational institute* computer education institute franchise* study centre franchise* indian computer institute franchise form* computer education franchise in bangalore* central government computer courses franchise* government computer courses franchise* free govt computer courses* abacus franchise* free computer education* skill development institute franchise* computer education center registration* franchise for vocational courses* vocational training institute franchise* computer institute govt registration* youth computer training centre franchise* ngo computer education franchise* computer training centre affiliation* franchise opportunities in hyderabad* computer franchise* best computer institute franchise* franchise opportunities in pune* central government schemes for free computer education* government certified computer courses* govt approved computer courses* franchise opportunities in kerala* digital india franchise* franchise in hyderabad* government approved computer institute* online computer courses in india* govt recognised computer institute franchise* franchise opportunities in tamilnadu* education franchise opportunities* franchise opportunities in kolkata* free computer education project* govt computer course franchise* central government computer education scheme* education franchise in india* distance education franchise* govt affiliation for computer institute* computer training center business registration* institute of computer education* new business franchise* free computer education program* govt computer training center* franchise options in india* free franchise in india* central government project for computer education* top education franchises* computer saksharta mission* top franchise in india* central government free computer courses* free online computer courses in india* all india computer saksharta mission* government computer training institutes* franchise opportunities in andhra pradesh* government computer training scheme* govt approved computer institute* new computer institute registration* how to register computer training institute* registration of computer training institute* central govt scheme for computer education* computer franchise business* computer institute registration* franchise opportunities in gujarat* How to register computer center* emaxindia* sarvaindia* sarvaindia.com* emaxindia.in* gbindia* globalbrain* gbindia.in* computer center franchise in auraiya* how to register computer institute in auraiya</h1>
          </Marquee>
        </div>
      </div>
      <div >

      </div>
    </div>
  )
}

export default Home
