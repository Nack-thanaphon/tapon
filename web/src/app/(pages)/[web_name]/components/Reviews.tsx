"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Autoplay from 'swiper';

import Image from 'next/image';

const mockReviews = [
    { author: "John Doe", rating: 5, text: "Amazing food and great service!" },
    { author: "Jane Smith", rating: 4, text: "Really enjoyed the meal, will come back again." },
    { author: "Sam Wilson", rating: 3, text: "Good food but the service was a bit slow." },
    { author: "Anna Lee", rating: 5, text: "Best restaurant in town!" },
    { author: "Mike Brown", rating: 4, text: "Great atmosphere and delicious food." },
];

const Reviews = (
    //     { reviews }: {
    //     reviews: {
    //         author: string;
    //         rating: number;
    //         text: string;
    //     }[];
    // }
) => {
    return (
        <div className="my-2">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // navigation={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
            >
                {mockReviews.map((item, index) => (
                    <SwiperSlide key={index} className="mx-auto  text-center  p-2">
                        <p className="text-center mt-2">&quot; {item.text} &quot;</p>
                        <small className="text-center mt-2">{item.author}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
