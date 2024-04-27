import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import '../components/css/style.css'
// Import your image assets
import image1 from "../assets/banner.jpg";
import image2 from "../assets/banner1.jpg";
import image3 from "../assets/banner2.jpg";
import image4 from "../assets/banner3.jpg";



const Banner = () => {

  return (
    <div className="container mx-auto">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          {/* Swiper container */}
          <div className="relative w-6/12 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
                <div className="slide-container overflow-x-hidden">
                    <img src={image1} alt="Banner 1" />
                    <div className="overlay">
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-container">
                    <img src={image2} alt="Banner 2" />
                    <div className="overlay">
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-container">
                    <img src={image3} alt="Banner 3" />
                    <div className="overlay">
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-container">
                    <img src={image4} alt="Banner 4" />
                    <div className="overlay">
                    </div>
                </div>
            </SwiperSlide>
       
      </Swiper>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis <span className="dark:text-violet-600">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
