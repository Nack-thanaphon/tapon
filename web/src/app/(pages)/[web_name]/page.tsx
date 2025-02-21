import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  FaMapPin,
  FaStar,
  FaPhone,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaLine,
  FaStore,
} from "react-icons/fa";
import Custom404 from "../notfound";
import { getProfileBySlug } from "@/app/shared/services/superbase.service";
import Link from "next/link";
import CopyLinkButton from "./components/CopyLinkButton";

type PageParams = {
  params: {
    web_name: string;
  };
};

type ProfileData = {
  profile_name: string;
  business_type: { name: string };
  phone: string;
  address: string;
  is_review_redirect: boolean;
  review_url: string;
  slug: string;
};

// 📌 Fetching profile data and handling server-side redirect
export async function getServerSideProps({ params }: PageParams) {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return { notFound: true };
  }

  // ✅ Perform SEO-friendly redirect if needed
  if (profileData.is_review_redirect) {
    return {
      redirect: {
        destination: profileData.review_url,
        permanent: false, // 302 Redirect
      },
    };
  }

  return {
    props: { profileData },
  };
}

// 📌 SEO Metadata
export async function generateMetadata({ params }: PageParams) {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return {
      title: "Profile not found",
      description: "The profile you are looking for does not exist.",
    };
  }

  return {
    title: `${profileData.profile_name} - ร้านอาหารชั้นนำ`,
    description: `${profileData.address} - บริการอาหารคุณภาพ สดใหม่ทุกวัน`,
    keywords: `tap-on-it.com, nfc-${profileData.profile_name}, menu-${profileData.profile_name}, reviews-${profileData.profile_name}, contact-${profileData.profile_name}, ร้านอาหาร, อาหารอร่อย`,
    image: "/logo.jpg",
  };
}

// 📌 Main Page Component
const Page = async ({ params }: PageParams) => {
  const { web_name } = params;
  const { data: profileData, error } = await getProfileBySlug(web_name);

  if (error || !profileData) {
    return <Custom404 />;
  }
  
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
        {/* Top Action Buttons */}
        <div className="flex justify-between mx-auto gap-3  mb-4 max-w-4xl">
          <Link
            href={profileData.review_url ?? "#"}
            className="bg-white rounded-xl p-3 w-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <FaStar className="text-yellow-500 mr-2 text-xl" />
            <span className="font-medium text-gray-700">รีวิวร้านค้า</span>
          </Link>
          <CopyLinkButton />
        </div>

        {/* Main Profile Card */}
        <div className="rounded-2xl space-y-6  p-3 lg:p-8 max-w-4xl mx-auto relative bg-white shadow-md">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.profile_name}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">{profileData.business_type.name}</span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaPhone className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">เบอร์โทร</h3>
                <p className="text-gray-600">{profileData.phone}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaClock className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">เวลาเปิด-ปิด</h3>
                <p className="text-gray-600">10:00 - 22:00 น.</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <FaStore className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-700">ประเภทร้าน</h3>
                <p className="text-gray-600">{profileData.business_type.name}</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">ที่อยู่ร้าน</h2>
            <p className="text-gray-600 leading-relaxed">{profileData.address}</p>
          </div>

          {/* Reviews Section */}
          {/* <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">รีวิวจากลูกค้า</h2>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(4.5) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="ml-2 text-gray-600 font-medium">(4.5/5)</span>
              </div>
            </div>
            <Reviews />
          </div> */}

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Link href="#" className="p-3 bg-pink-50 rounded-full text-pink-500 hover:bg-pink-100 transition-colors">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="#" className="p-3 bg-blue-50 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
              <FaFacebook className="text-xl" />
            </Link>
            <Link href="#" className="p-3 bg-green-50 rounded-full text-green-500 hover:bg-green-100 transition-colors">
              <FaLine className="text-xl" />
            </Link>
          </div>

          {/* Navigation Button */}
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white rounded-xl p-4 flex justify-center items-center w-full transition-colors duration-300"
          >
            <FaMapPin className="mr-2" />
            <span className="font-medium">นำทางไปยังร้าน</span>
          </Link>
        </div>

        <Footer name={profileData.slug} />
      </div>
    </>
  );
};

export default Page;
