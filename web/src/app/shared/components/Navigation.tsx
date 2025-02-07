import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
        <MenubarTrigger>Promotion</MenubarTrigger>
        <MenubarTrigger>Contact</MenubarTrigger>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
    </Menubar>

  );
};

export default Navigation;