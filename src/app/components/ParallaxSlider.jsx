import React from 'react';
import Swiper from 'react-id-swiper';
import slider_bg from "../../_/image/slider_bg.jpg"


  const Parallax = () => {
    const params = {
      speed: 600,
      parallax: true,
      parallaxEl: {
        el: '.parallax-bg',
        value: '-23%'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (
      <Swiper {...params} >
        <div>
          <div data-swiper-parallax="-300">
            Slide #1
          </div>
          <div data-swiper-parallax="-200">
            Subtitle
          </div>
          <div data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
              amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
              Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
              euismod.
            </p>
          </div>
        </div>
        <div>
          <div data-swiper-parallax="-300">
            Slide #2
          </div>
          <div data-swiper-parallax="-200">
            Subtitle
          </div>
          <div data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
              amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
              Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
              euismod.
            </p>
          </div>
        </div>
        <div>
          <div data-swiper-parallax="-300">
            Slide #3
          </div>
          <div data-swiper-parallax="-200">
            Subtitle
          </div>
          <div data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
              amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
              Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
              euismod.
            </p>
          </div>
        </div>
      </Swiper>
    )
  };
  export default Parallax;