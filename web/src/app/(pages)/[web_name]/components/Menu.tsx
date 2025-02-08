"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Autoplay from 'swiper';

import Image from 'next/image';

const menuItem = [
  { name: "ผัดไทย", image: "/images/pad-thai.jpg" },
  { name: "ต้มยำกุ้ง", image: "/images/tom-yum-goong.jpg" },
  { name: "แกงเขียวหวาน", image: "/images/green-curry.jpg" },
  { name: "ข้าวผัดปู", image: "/images/crab-fried-rice.jpg" },
  { name: "ส้มตำ", image: "/images/som-tum.jpg" },
];

const Menu = (
  //   { menuItem }: {
  //   menuItem: {
  //     name: string;
  //     image: string;
  //     price: string;
  //   }[];
  // }
) => {
  return (
    <div className="my-2">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
        }}
      >
        {menuItem.map((item, index) => (
          <SwiperSlide key={index} className="mx-auto rounded-lg border p-2">
            <Image src={"/thai-currey.png"} alt={item.name} width={200} height={200} className="rounded-lg mx-auto" />
            <h3 className="text-center mt-2">{item.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;