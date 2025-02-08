"use client"
 

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
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
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={() => scrollToSection(sections.home)}>Home</MenubarTrigger>
        <MenubarTrigger onClick={() => scrollToSection(sections.promotion)}>Promotion</MenubarTrigger>
        <MenubarTrigger onClick={() => scrollToSection(sections.contact)}>Contact</MenubarTrigger>
        <MenubarTrigger onClick={() => scrollToSection(sections.clients)}>Clients</MenubarTrigger>
        <MenubarTrigger onClick={() => scrollToSection(sections.reviews)}>Reviews</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;