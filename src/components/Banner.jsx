import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import '../components/css/style.css'
// Import your image assets
import image1 from "../assets/banner.jpg";
import image2 from "../assets/banner1.jpg";
import image3 from "../assets/banner2.jpg";
// import image4 from "../assets/banner3.jpg";



const Banner = () => {

  return (
    <div>
      
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            Autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center"  >
                    <div className="w-full md:w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-white text-base md:text-xl mb-2'>Textiles are materials</h4>
                        <h1 className='text-white text-xl md:text-6xl  px-10 xl:px-28 pb-5 md:pb-10  font-bold '> made of natural or synthetic fibers.</h1>
                        <p></p>
                        <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center text-white">
                    <div className="w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-white text-base md:text-xl mb-2'>textile is something made </h4>
                        <h1 className='text-white text-xl md:text-6xl  px-10 xl:px-28 pb-5 md:pb-10  font-bold'> by knitting, crocheting fibers together</h1>
                        <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center text-white">
                    <div className="w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-white text-base md:text-xl mb-2'>Textilis for </h4>
                        <h1 className='text-white text-xl md:text-6xl  px-10 xl:px-28 pb-5 md:pb-10  font-bold'>"woven fabric” and that's exactly what it is.</h1>
                        <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    </div>
);
};

export default Banner;
