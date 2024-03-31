'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Swipers.module.scss'

import {Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const HomeSwiper = ({items}: any) => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
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
                <SwiperSlide key={item.srcImage} className={styles.promoSwiper__slide}>
                    <Link href={item.url}>
                        <img src={item.srcImage} loading="lazy" alt={item.alt} />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HomeSwiper;