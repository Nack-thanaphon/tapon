
import React from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Contact from './components/Contact';
import Map from './components/Map';
import Reviews from './components/Reviews';
import { FaMapPin, FaStar } from 'react-icons/fa';
import Custom404 from '../notfound';
import { getProfileBySlug, getAllProfiles } from '@/app/shared/services/superbase.service';
import Image from 'next/image';
import Link from 'next/link';
import CopyLinkButton from './components/CopyLinkButton';
import RedirectIfNeeded from './components/RedirectIfNeeded';
import Head from 'next/head';
import Footer from './components/Footer';
import Menu from './components/Menu';

type PageParams = {
  params: {
    web_name: string;
  };
};

export async function generateMetadata({ params }: PageParams) {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return {
      title: 'Profile not found',
      description: 'The profile you are looking for does not exist.',
    };
  }

  return {
    title: `Profile of ${profileData.profile_name}`,
    description: `This is the profile page for ${profileData.profile_name}.`,
    keywords: 'profile, restaurant, menu, reviews, contact',
    image: 'logo.jpg',
  };
}

const Page = async ({ params }: PageParams) => {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return <Custom404 />;
  }


  return (
    <>
      <Header />
      {/* <RedirectIfNeeded isReviewRedirect={profileData.is_review_redirect} reviewUrl={profileData.review_url} /> */}
      <div className="container mx-auto text-center p-4  ">
        <div className="flex justify-end gap-3  mb-2">
          <Link href="/" className='bg-white rounded-[10px] p-2 w-full flex items-center'>
            <FaStar className="text-yellow-500 mr-2" />
            Review (click here)
          </Link>
          <CopyLinkButton />
        </div>
        <div className="shadow-sm rounded-lg  space-y-4 p-6 max-w-4xl mx-auto relative bg-white "

        >
          <h2 className="text-2xl text-slate-700">{profileData.profile_name}</h2>
          <div className="flex justify-center mx-auto ">
            <Image src={"/logo.jpg"} width={96} height={96} className='rounded-full w-[90px] h-[90px] overflow-hidden' alt={profileData.profile_name} />
          </div>
          <div className="text-lg">
            <b className="text-slate-500">063-674-9204</b> <br />
            <small className="text-slate-500">ทุ่งเสลี่ยม สุโขทัย</small>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-semibold">ประเภท</h2>
            <small className="text-slate-600">ร้านอาการตามสั่ง</small>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-semibold">เมนูเด็ด</h2>
            <Menu />
          </div>
          <div className="text-left">
            <h2 className="text-xl font-semibold">รีวิว</h2>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <span className="ml-2 text-slate-600">(20 reviews)</span>
            </div>
            {/* <Reviews reviews={profileData.reviews} /> */}
          </div>
          <div className="text-left">
            <Link href="/" className='bg-blue-400 rounded-[10px] p-2 flex items-center w-fit'>
              <FaMapPin className="text-red-500" />
              ออกเดินทาง
            </Link>
          </div>
          <div className="absolute  bottom-0 right-0">
            <Image src={"/thai-currey.png"} width={120} height={120} className='' alt={profileData.profile_name} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;