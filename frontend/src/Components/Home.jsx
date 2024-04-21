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
        <SwiperSlide style={{ 
          backgroundImage: `url('https://www.itcomputerinstitute.com/upload/gallery/155367585327351.jpg')`
        }} className='h-screen w-screen object-cover '>
          <div >
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://lh3.googleusercontent.com/p/AF1QipO-8U0wXa5QcGWPSej-uNC5mWTHdC0iS0u_bfiZ=w1080-h608-p-no-v0" className='img-fluid  mx-autoobject-cover' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://content.jdmagicbox.com/comp/kolkata/m8/033pxx33.xx33.160929210019.z5m8/catalogue/computer-programming-center-belgharia-kolkata-computer-training-institutes-8ga2g.jpg" className='img-fluid mx-auto object-cover' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='' >
            <img src="https://content.jdmagicbox.com/comp/kheda/a9/9999p2694.2694.240127173918.s7a9/catalogue/siddh-institute-kheda-camp-kheda-computer-training-institutes-tvfuy02ppe.jpg" className='img-fluid mx-auto object-cover' alt="" />
          </div>
          <br /><br />
        </SwiperSlide>


      </Swiper>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:gap-48 mt-5'>
        <div className='text-3xl text-center '>
          <h1 className='text font-bold lg:ml-20  mt-5 '>WELCOME TO DIGITAL COMPUTER INSTITUTE</h1>
          <p className='text-base text-gray-500 lg:ml-20  text-start  mt-5 mb-5'><strong className='text-gray-500'>Digital Computer Institute</strong> has been registered under the Government of India, working in different fields of Programme & Commercial Training sponsored by the Central Government by taking a vow to approach every class of Youth in the society. The Organization is also certified by ISO 9001: 2015. The Institute & the Organization is also Registered under the Ministry of CR Act 1957, MHRD, Govt. of India, Ministry of Corporate Affairs (MCA), Ministry of Micro, Small & Medium Enterprises (MSME), NCS – National career Service, Ministry of Labour & Employment and Ministry of AYUSH and is accredited to conduct the various fields of technical programs sponsored by both the Govt.<br />
            <strong className='text-gray-500'>Digital Computer Institute </strong>The main function of the society is to provide higher technical education in nominal charges for every group of society of Urban & Rural areas all over India and get success in computer revolution which is the main dream of Indian Govt.</p>
        </div>
        <div className='mt-5'>
          <img src="https://www.digitalcomputerinstitute.com/new/product/category/1632892464871.jpg" className='img fluid ' alt="" />
        </div>

      </div>
      <div className='sm:container  mt-5 rounded-lg mx-auto bg-[#04AA6D]'>
        <div className='grid grid-cols-1  p-4 mb-5'>
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            <h1 className='text-md text-white'>free government computer courses franchise* govt free computer education franchise* computer institute franchise* computer education franchise in village area* govt computer education franchise* computer center franchise* free franchise for computer center* govt schemes for computer education* ngo scheme for computer education* mputer training institute franchise* computer institute franchise absolutely free* free computer education scheme* govt project for computer education* computer training franchise* computer institute franchise* computer courses franchise* free computer center franchise* ngo franchise for computer education* government franchise for computer institute* most profitable computer education franchises* free computer education by ngo* franchise of educational institute* computer education institute franchise* study centre franchise* indian computer institute franchise form* computer education franchise in bangalore* central government computer courses franchise* government computer courses franchise* free govt computer courses* abacus franchise* free computer education* skill development institute franchise* computer education center registration* franchise for vocational courses* vocational training institute franchise* computer institute govt registration* youth computer training centre franchise* ngo computer education franchise* computer training centre affiliation* franchise opportunities in hyderabad* computer franchise* best computer institute franchise* franchise opportunities in pune* central government schemes for free computer education* government certified computer courses* govt approved computer courses* franchise opportunities in kerala* digital india franchise* franchise in hyderabad* government approved computer institute* online computer courses in india* govt recognised computer institute franchise* franchise opportunities in tamilnadu* education franchise opportunities* franchise opportunities in kolkata* free computer education project* govt computer course franchise* central government computer education scheme* education franchise in india* distance education franchise* govt affiliation for computer institute* computer training center business registration* institute of computer education* new business franchise* free computer education program* govt computer training center* franchise options in india* free franchise in india* central government project for computer education* top education franchises* computer saksharta mission* top franchise in india* central government free computer courses* free online computer courses in india* all india computer saksharta mission* government computer training institutes* franchise opportunities in andhra pradesh* government computer training scheme* govt approved computer institute* new computer institute registration* how to register computer training institute* registration of computer training institute* central govt scheme for computer education* computer franchise business* computer institute registration* franchise opportunities in gujarat* How to register computer center* emaxindia* sarvaindia* sarvaindia.com* emaxindia.in* gbindia* globalbrain* gbindia.in* computer center franchise in auraiya* how to register computer institute in auraiya</h1>
          </Marquee>
        </div>
      </div>
      <div className='w-full bg-[#996666]'>
        <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="https://www.digitalcomputerinstitute.com/new/product/category/1632892464871.jpg" alt="An image" />
              </div>
              <div className="p-8 h-20 w-full">
                <Marquee speed={100} pauseOnHover direction='up' height="100px" gradientWidth={60}>
                  <p className="mt-2 text-gray-500 ">Your content here</p>
                </Marquee>
              </div>
            </div>
          </div>
          {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="https://www.digitalcomputerinstitute.com/new/product/category/1632892464871.jpg" alt="An image" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your title here</div>
                <p className="mt-2 text-gray-500">Your content here</p>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="https://www.digitalcomputerinstitute.com/new/product/category/1632892464871.jpg" alt="An image" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your title here</div>
                <p className="mt-2 text-gray-500">Your content here</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className='sm:container  mt-5 rounded-lg mx-auto bg-[#232434]'>
        <div className='grid grid-cols-1  p-4 mb-5'>
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            <h1 className='text-md text-white'>,kaushal vikas yojana online,kosal vikas yojana kaushal vikas yojna online registration,kaushal vikas yojna up,up kaushal vikas online form,kaushal vikas online form,kaushal vikas yojana online registration,kaushal vikas yojana online form,kaushal vikas prashikshan up,skill development mission,upsdm registration online,lakme training academy,vlcc institute of beauty & nutrition,orane institute of beauty & wellness,vlcc institute fees,vlcc professional makeup course fees vlcc beautician course fees,orane beauty academy,institutes for beautician course,Beauty, Cosmetology, Hair Dressing ,Makeup institute training colleges in Jaipur,Vocational Training Franchise,govt beauty parlour course in jaipur,beauty parlour course fees in jaipur,vlcc institute of beauty & nutrition jaipur rajasthan,beauty institute jaipur, rajasthan,beauty parlour institute in jaipur,beauty institute in jaipur,orane beauty academy, institute of beauty and wellness jaipur, rajasthan,beauty parlor course in jaipur ' Hyderabad 'Itanagar 'Dispur' Patna 'Raipur ' Panjim ' Gandhinagar ' Chandigarh ' Shimla ' Srinagar ' Jammu ' Ranchi ' Bangalore ' Thiruvananthapuram ' Bhopal ' Mumbai ' Imphal ' Aizawl ' Kohima 'Bhubaneswar ' Chandigarh ' Jaipur ' Gangtok ' Chennai ' Agartala ' Lucknow ' Dehradun ' Kolkata,free government computer courses franchise,csc computer education franchise,computer institute franchise,computer center franchise,free franchise for computer center,govt computer education franchise,free computer education franchisecomputer institute franchise free,computer education franchise,free computer education scheme,govt recognised computer institute, free computer center franchise,webel computer training centre franchise,govt free computer education,free franchise for computer institute,computer center franchise in west bengal,government franchise for computer institute,digital marketing training in jaipur,nct registration for computer institute,free franchise computer education india,itrc indore,computer education center registration,institute franchise proposal,govt computer institute in delhi,free com</h1>
          </Marquee>
        </div>
      </div>
      <div className='container mt-5'>
        <h1 className='text-center text-4xl font-semibold mb-4'>Our Programmes</h1>
      </div>
       <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
        <div className='bg-[#996666] rounded-lg m-4 p-4'>
          <h1 className='text-white text-2xl font-semibold'>Computer Courses</h1>
          <p className='text-white text-base'>We provide computer courses for all age groups and all types of students. We have courses for students who want to learn basic computer skills, as well as for those who want to learn advanced computer skills.</p>
        </div>
        <div className='bg-[#996666] rounded-lg m-4 p-4'>
          <h1 className='text-white text-2xl font-semibold'>Vocational Courses</h1>
          <p className='text-white text-base'>We provide vocational courses for students who want to learn a specific skill or trade. Our vocational courses are designed to help students gain practical skills that they can use in the workplace.</p>
        </div>
        <div className='bg-[#996666] rounded-lg m-4 p-4'>
          <h1 className='text-white text-2xl font-semibold'>Skill Development Courses</h1>
          <p className='text-white text-base'>We provide skill development courses for students who want to improve their skills and knowledge in a particular area. Our skill development courses are designed to help students develop the skills they need to succeed in their chosen field.</p>
        </div>
       </div>
       
    </div>
  )
}

export default Home
