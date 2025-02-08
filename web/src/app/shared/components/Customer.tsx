"use client"

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMutation } from "@tanstack/react-query";
import Link from 'next/link';
import { getAllProfiles, ProfileData } from '../services/superbase.service';

const Customer = () => {
    const [data, setData] = useState<ProfileData[]>([]);

    const fetch = useMutation({
        mutationFn: async () => {
            try {
                const response = await getAllProfiles();
                setData(response.data ?? []);
            } catch (error: any) {
                console.error("Draft error:", error);
                throw new Error(error);
            }
        },
    });

    useEffect(() => {
        fetch.mutate();
    }, [])


    return (
        <div className="my-2">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="mx-auto text-center border py-5 bg-blue-200 rounded-lg p-2">
                        <Link
                            href={`/${item.slug}`}
                            key={item.id}
                            className="block transition-transform duration-200 hover:scale-102"
                        >
                            <h1>{item.profile_name}</h1>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Customer



