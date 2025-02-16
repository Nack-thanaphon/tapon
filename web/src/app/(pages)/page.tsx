"use client"

import Navigation from "../shared/components/Navigation";
import { FaCut, FaClinicMedical, FaUtensils } from 'react-icons/fa';
import Image from 'next/image';
import React, { useRef } from 'react';
import Link from "next/link";
import Compare from "../shared/components/Compare";
import PackageComponent from "../shared/components/Package";

export default function HomePage() {
  const homeRef = useRef(null);
  const promotionRef = useRef(null);
  const contactRef = useRef(null);
  const clientsRef = useRef(null);
  const reviewsRef = useRef(null);

  const sections = {
    home: homeRef,
    promotion: promotionRef,
    contact: contactRef,
    clients: clientsRef,
    reviews: reviewsRef,
  };

  return (
    <>
      <div className="container mx-auto p-2 space-y-2">
        <Navigation sections={sections} />
        <div className="pt-[4rem]"></div>
        <div ref={homeRef} className="bg-white rounded-[10px] shadow-sm   text-start p-8 h-fit  space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 ระบบโปรไฟล์
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 ปักหมุด GOOGLE
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 NFC + SEO
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 ปักหมุด GOOGLE
          </h1>
          <div className="pt-5">
            <h1 className="text-1xl font-bold text-gray-900">
              เพิ่มคะแนน review ให้ธุรกิจคุณ</h1>

            <p className="text-xl text-gray-700 mt-4">ดันร้านติดอันดับ เพิ่มยอดขายได้ง่ายๆ ด้วย SEO + NFC 🚀</p>
            <div className="mt-8">
              <Link href={'/thepprathan-place'} className="mt-8 bg-blue-500 hover:bg-blue-700 !text-white font-bold py-2 px-5 rounded-[20px]">
                ตัวอย่างโปรไฟล์
              </Link>
            </div>
            <Image src={"/image/hero.jpg"} width={300} height={300} alt='nfc+seo' className="mx-auto py-3 my-5 rounded-[20px]" />
            <div className="w-fit mx-auto mt-5">
              {/* <Link href={'/register'} className="mt-8 bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                สนใจสั่งซื้อ
              </Link> */}

            </div>
          </div>
        </div>

        {/* 
        <section className="bg-white rounded-[10px] shadow-sm   text-center p-8 h-fit my-auto bg-white rounded-[10px] shadow-sm   text-center p-8 h-fit my-auto my-8  my-8 h-screen">
          <h2 className="text-2xl font-semibold">ลูกค้าของเรา</h2>
          <Customer />
        </section> */}
        <Compare />

        {/* <section ref={promotionRef} className="bg-white rounded-[10px] shadow-sm   text-center p-8  my-auto my-8  my-8 h-fit">
          <h2 className="text-2xl font-semibold">Packages</h2>
          <PackageComponent />
        </section> */}
        <section ref={clientsRef} className="bg-white rounded-[10px] shadow-sm   text-center p-8  my-auto my-8  my-8 h-fit">
          <h2 className="text-2xl font-semibold text-nowrap">ทำไมต้องเรา ?</h2>
          <p>&quot;เพราะเรามอบมากกว่าแค่รีวิว แต่คือการสร้างอนาคตให้ธุรกิจของคุณ&quot;</p>
          <div className="mt-4 w-fit mx-auto">
            <iframe
              width="full"
              height="215"
              src="https://www.youtube.com/embed/sH0YJy_BHVE"
              title="YouTube video player"
              frameBorder="0"
              className="rounded-[10px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section ref={reviewsRef} className="bg-white rounded-[10px] shadow-sm text-center p-8 h-fit my-auto my-8 space-y-4">
          <h2 className="text-2xl font-semibold">ลูกค้าของเรา</h2>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
              <FaCut className="text-blue-500" />
              <p className="text-lg">20 ร้านเสริมสวย</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaClinicMedical className="text-blue-500" />
              <p className="text-lg">13 คลีนิค</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUtensils className="text-blue-500" />
              <p className="text-lg">70 ร้านอาหาร</p>
            </div>
          </div>
        </section>
        <section ref={contactRef} className="bg-white rounded-[10px] shadow-sm    text-center p-8 h-fit  my-8">
          <Image src={"/logo.png"} width={90} height={90} alt='nfc+seo' className="mx-auto py-3 rounded-[20px]" />
          <h2 className="text-2xl font-semibold text-blue-400">ติดต่อ</h2>
          ต้องการสอบถามข้อมูลเพิ่มเติม
          <h2 className="text-2xl font-bold">tap-on-it.com</h2>
          <p>063-674-9204</p>
          <p>support@tap-on-it.com</p>
          <Image src={"/bussiness-logo.jpeg"} width={300} height={300} alt='nfc+seo' className="mx-auto py-3 rounded-[20px]" />
        </section>
      </div>
    </>
  );
}