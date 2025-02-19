"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFingerprint, FaLink, FaStar, FaCheckCircle, FaUserTie, FaChartLine, FaMobile, FaComments } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative flex items-center  min-h-screen ">
        <div className="relative z-10  mx-auto ">
          <div className="lg:flex justify-between gap-5 p-5">
            <div className="text-start mb-3">
              <div className="text-5xl md:text-6xl font-extrabold uppercase space-y-4">
                <p className="text-blue-500">เพิ่มยอดรีวิว</p>
                <p>แค่แตะและรีวิว</p>
                <p className="text-blue-300">ไม่ต้องพิมพ์ค้นหาให้ยุ่งยาก</p>
              </div>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">

              </p>
              <div className="flex gap-4 justify-start mt-8">

                <Link href="m.me/545472585319973" className="px-8 py-4 text-lg font-semibold border-2 border-blue-400 hover:bg-blue-400/10 transition rounded-full">
                  ปรึกษาเรา
                </Link>
              </div>
            </div>
            <Image
              src="/image/Showcase1.gif"
              alt="Hero background"
              width={440}
              height={40}
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900/50  mb-3">
        <h2 className="text-4xl font-bold text-center">ขนาดสินค้า</h2>
        <div className="container mx-auto grid  gap-8 px-6">
          {[
            {
              number: "140 * 120",

              label: "แบบตั้งโต๊ะ",
              image: "/image/google.webp"

            },

          ].map((stat, index) => (
            <div key={index} className="text-center p-6">
              <Image
                src={stat.image}
                alt="Hero background"
                width={350}
                height={350}
                className="object-contain rounded-2xl my-4 mx-auto"
              />
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="py-12 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center">สถิติผู้ใช้บริการ</h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { number: "20+", label: "ธุรกิจที่ไว้วางใจเรา" },
            { number: "50,000+", label: "ผู้เข้าใช้งาน" },
            { number: "95%", label: "ความพึงพอใจของลูกค้า" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-16">
            ทำไมต้องเลือกใช้ <span className="text-blue-400">ป้ายแตะรีวิว</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaMobile />,
                title: "ใช้งานง่าย ไม่ต้องติดตั้งแอพ",
                desc: "ลูกค้าเพียงแค่แตะสมาร์ทโฟนที่ป้าย NFC ก็สามารถเข้าถึงข้อมูลธุรกิจของคุณได้ทันที โดยไม่ต้องติดตั้งแอพพลิเคชั่นใดๆ เพิ่มเติม"
              },
              {
                icon: <FaChartLine />,
                title: "วิเคราะห์ผลแบบเรียลไทม์",
                desc: "ติดตามสถิติการใช้งาน พฤติกรรมผู้ใช้ และประสิทธิภาพของแคมเปญได้แบบเรียลไทม์ผ่านแดชบอร์ดที่ใช้งานง่าย"
              },
              {
                icon: <FaUserTie />,
                title: "รองรับธุรกิจทุกประเภท",
                desc: "ไม่ว่าจะเป็นร้านอาหาร โรงแรม ร้านค้า หรือสำนักงาน เราพร้อมปรับแต่งโซลูชันให้เหมาะกับความต้องการของธุรกิจคุณ"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition">
                <div className="text-5xl text-blue-400 mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/image/444.gif"
                alt="NFC Showcase"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">ระบบจัดการที่ครบครัน</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <FaLink />,
                    title: "ปรับเปลี่ยนลิงก์ได้ตลอดเวลา",
                    desc: "แก้ไขปลายทางของลิงก์ได้ทันทีผ่านระบบจัดการ โดยไม่ต้องเปลี่ยนป้าย NFC"
                  },
                  {
                    icon: <FaComments />,
                    title: "ระบบรีวิวอัตโนมัติ",
                    desc: "กระตุ้นให้ลูกค้ารีวิวธุรกิจของคุณได้ง่ายๆ ช่วยเพิ่มความน่าเชื่อถือและอันดับใน Google"
                  },
                  {
                    icon: <FaChartLine />,
                    title: "รายงานประสิทธิภาพ",
                    desc: "ดูสถิติการใช้งาน เวลาที่มีคนแตะมากที่สุด และข้อมูลอื่นๆ เพื่อปรับปรุงกลยุทธ์ทางธุรกิจ"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl text-blue-400">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">แพ็คเกจราคา</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "ร้านค้าขนาดเล็ก",
                price: "490 บาท",
                period: "บาท",
                features: [
                  "NFC Tags 1 ชิ้น",
                  "ระบบเว็บโปรไฟล์",
                  "สามารถเปลี่ยนลิงค์ได้ 3 ครั้ง",
                  "จัดส่งฟรี",
                ]
              },
              {
                name: "ร้านค้าขนาดกลาง",
                price: "1,990 บาท",
                period: "บาท",
                features: [
                  "NFC Tags 5 ชิ้น",
                  "ระบบเว็บโปรไฟล์",
                  "รายงานสถิติรายเดือน",
                  "สามารถเปลี่ยนลิงค์ได้ 3 ครั้ง",
                  "ช่วยทำ SEO ให้กับร้านค้า",
                  "จัดส่งฟรี",
                ]
              },
            ].map((plan, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{plan.price}</div>
                <div className="text-gray-400 mb-6">{plan.period}</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">พร้อมที่จะเริ่มต้นใช้งานแล้วหรือยัง?</h2>
          <p className="text-xl text-gray-400 mb-8">
            เข้าร่วมกับกว่า 500 ธุรกิจที่ไว้วางใจเราในการเพิ่มยอดขายและการมีส่วนร่วมของลูกค้า
            ด้วยโซลูชัน NFC ที่ล้ำสมัยของเรา
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="m.me/545472585319973" className="px-8 py-4 text-lg font-semibold border-2 border-blue-400 hover:bg-blue-400/10 transition rounded-full">
              ปรึกษาผู้เชี่ยวชาญ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}