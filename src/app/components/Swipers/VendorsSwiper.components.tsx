'use client'
import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Swipers.module.scss'

import {Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const VendorSwiper = ({items}: any) => {
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);
    
    return (
        <div className={styles.swiper}>
            <Swiper
                ref={sliderRef}
                className={styles.VendorSwiper}
                modules={[Navigation]}
                // navigation
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    },
                    // 400: {
                    //     slidesPerView: 2.2,
                    // },
                    // 575: {
                    //     slidesPerView: 2.3,
                    // },
                    // // when window width is >= 640px
                    // 768: {
                    //     slidesPerView: 3,
                    // },
                    // // when window width is >= 768px
                    // 1001: {
                    //     slidesPerView: 3.8,
                    // },
                    // 1201: {
                    //     slidesPerView: 41,
                    // }
                }}
            >

                {items?.map((item: any) => (
                    <SwiperSlide key={item.srcImage}>
                        <div className={styles.vendors__el}>
                            <img src={item.srcImage} loading="lazy" alt={item.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev mini" onClick={handlePrev} />
            <div className="swiper-button-next mini" onClick={handleNext} />
        </div>
    );
}

export default VendorSwiper;