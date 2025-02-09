"use client"
import React, { RefObject } from 'react';

type Sections = {
  home: RefObject<HTMLElement>;
  promotion: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
  clients: RefObject<HTMLElement>;
  reviews: RefObject<HTMLElement>;
};

type NavigationProps = {
  sections: Sections;
};

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const scrollToSection = (section: RefObject<HTMLElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed flex justify-center py-4 bg-white rounded-[10px]  shadow-sm w-screen left-0 top-0">
      <div className="py-2 rounded-[10px] mx-2 px-3 bg-blue-500 hover:bg-blue-700 text-white" onClick={() => scrollToSection(sections.home)}>หน้าหลัก</div>
      <div className="py-2 rounded-[10px] mx-2 px-3 bg-blue-500 hover:bg-blue-700 text-white" onClick={() => scrollToSection(sections.promotion)}>โปรโมชั่น</div>
      <div className="py-2 rounded-[10px] mx-2 px-3 bg-blue-500 hover:bg-blue-700 text-white" onClick={() => scrollToSection(sections.contact)}>ติดต่อ</div>
    </div>
  );
};

export default Navigation;