import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slide1 from '../../../assets/chhola.jpg'
import slide2 from '../../../assets/chhola.jpg'
import slide3 from '../../../assets/chhola.jpg'
import slide4 from '../../../assets/chhola.jpg'
import slide5 from '../../../assets/chhola.jpg'


import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.am to 10.00pm"}
            heading={"Order Online"}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-8"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl text-white uppercase text-center -mt-16">salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl text-white uppercase text-center -mt-16">Pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl text-white uppercase text-center -mt-16">Soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl text-white uppercase text-center -mt-16">Desserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl text-white uppercase text-center -mt-16">salads</h3>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Category;