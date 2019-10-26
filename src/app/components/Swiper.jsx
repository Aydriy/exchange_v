import React from 'react';
// import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import swiper1 from '../../_/image/swiper/swiper1.jpg'
import swiper2 from '../../_/image/swiper/swiper2.jpg'
import swiper3 from '../../_/image/swiper/swiper3.jpg'
import swiper4 from '../../_/image/swiper/swiper4.jpg'
import swiper5 from '../../_/image/swiper/swiper5.jpg'
import Swiper from 'react-id-swiper';


const Autoplay = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    
  }
  return (
    <Swiper {...params}>
      <div><div className="swiper-content"><img src={swiper1} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper2} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper3} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper4} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper5} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper4} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper3} alt="" className="swipe" /></div></div>
      <div><div className="swiper-content"><img src={swiper2} alt="" className="swipe" /></div></div>
    </Swiper>
  )
};
export default Autoplay;


// const ManipulatingSwiper = () => {
//   const params = {
//     // Provide Swiper class as props
//     Swiper,
//     // Add modules you need
//     modules: [Navigation, Pagination],
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true,
      
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     },
//     spaceBetween: 30,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//     },
//   }
 
//   return(
//     <ReactIdSwiperCustom {...params} >
//       <div><div className="swiper-content"><img src={swiper1} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper2} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper3} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper4} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper5} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper5} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper5} alt="" className="swipe" /></div></div>
//       <div><div className="swiper-content"><img src={swiper5} alt="" className="swipe" /></div></div>
//     </ReactIdSwiperCustom>
//   )
// }
 
// export default ManipulatingSwiper;



