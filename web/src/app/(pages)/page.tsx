"use client"

import Navigation from "../shared/components/Navigation";
import Customer from "../shared/components/Customer";
import Image from 'next/image';
import React, { useRef } from 'react';

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
      <Navigation sections={sections} />
      <div ref={homeRef} className="bg-gray-200 text-center p-12">
        <h1 className="text-3xl font-bold text-gray-900">Expand Your Business Horizons with NFC Web Services</h1>
        <p className="text-xl text-gray-700 mt-4">Fast, reliable, and scalable solutions tailored to boost your market presence.</p>
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>

      <div className="container mx-auto p-6">
        <section className="my-8 h-screen">
          <h2 className="text-2xl font-semibold">Our Customer</h2>
          <Customer />
        </section>
        <section ref={promotionRef} className="my-8 h-screen">
          <h2 className="text-2xl font-semibold">Benefits of NFC Web Services</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Scalable solutions that grow with your business.</li>
            <li>Easy integration with multiple platforms.</li>
            <li>Enhance your market presence with minimal effort.</li>
          </ul>
        </section>
        <section ref={contactRef} className="my-8 h-screen">
          <h2 className="text-2xl font-semibold">Packages</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Basic Package: Essential features to get you started.</li>
            <li>Pro Package: Advanced features for growing businesses.</li>
            <li>Enterprise Package: Comprehensive solutions for large enterprises.</li>
          </ul>
        </section>
        <section ref={clientsRef} className="my-8 h-screen">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-gray-700">For inquiries, please email us at <a href="mailto:contact@tap-on.com" className="text-blue-500">contact@tap-on.com</a> or call us at (123) 456-7890.</p>
        </section>
        <section ref={reviewsRef} className="my-8 h-screen">
          <h2 className="text-2xl font-semibold">Our Clients</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Client A: Leading industry player.</li>
            <li>Client B: Innovative solutions provider.</li>
            <li>Client C: Trusted by thousands.</li>
          </ul>
        </section>
        <section className="my-8 h-screen">
          <h2 className="text-2xl font-semibold text-red-400">Reviews</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>John Doe: &quot;Scalable solutions that grow with your business.&quot;</li>
            <li>Jane Smith: &quot;Easy integration with multiple platforms.&quot;</li>
            <li>Sam Wilson: &quot;Enhance your market presence with minimal effort.&quot;</li>
          </ul>
        </section>
      </div>
    </>
  );
}