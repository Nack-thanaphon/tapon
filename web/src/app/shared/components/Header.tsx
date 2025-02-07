import Link from "next/link";
import React from "react";

function Header({ title }: { title: string }) {
  return (
    <>
      <div
        className="bg-pink-300 text-center text-white py-3"
      >
        <h6 className="mb-0">{title}</h6>
      </div>
    </>
  );
}

export default Header;
