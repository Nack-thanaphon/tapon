import React from 'react';

const Compare = () => {
  return (
    <section className="bg-white rounded-[10px] shadow-sm text-center p-8 h-fit my-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">เปรียบเทียบคุณสมบัติ</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-nowrap text-start">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">คุณสมบัติ</th>
              <th className="py-2 px-4 border-b">ทั่วไป</th>
              <th className="py-2 px-4 border-b">บริการของเรา (Tap-on-it.com)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">การรีวิวรวดเร็ว (NFC/QR)</td>
              <td className="py-2 px-4 border-b">✅ ใช้งานง่าย</td>
              <td className="py-2 px-4 border-b">✅ ใช้งานง่าย</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">ลิงก์โปรไฟล์ที่ปรับปรุงได้</td>
              <td className="py-2 px-4 border-b">❌ ไม่มี</td>
              <td className="py-2 px-4 border-b">✅ มีโปรไฟล์ปรับได้ตลอดเวลา</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">รองรับ SEO</td>
              <td className="py-2 px-4 border-b">❌ ไม่มี</td>
              <td className="py-2 px-4 border-b">✅ เพิ่มการมองเห็น Google</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">วิเคราะห์ข้อมูลลูกค้า</td>
              <td className="py-2 px-4 border-b">❌ ไม่มี</td>
              <td className="py-2 px-4 border-b">✅ ส่งรายงานรายเดือน</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">ยิงโฆษณาผ่าน Google Ads</td>
              <td className="py-2 px-4 border-b">❌ ไม่มี</td>
              <td className="py-2 px-4 border-b">✅ เพิ่มโอกาสการมองเห็น</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">พยากรณ์กลุ่มลูกค้า</td>
              <td className="py-2 px-4 border-b">❌ ไม่มี</td>
              <td className="py-2 px-4 border-b">✅ ใช้ข้อมูลเพื่อวางกลยุทธ์</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">จัดส่งฟรีใน 3 วัน</td>
              <td className="py-2 px-4 border-b">❌ ไม่ระบุ</td>
              <td className="py-2 px-4 border-b">✅ มีบริการจัดส่งฟรี</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Compare;