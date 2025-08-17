import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/img/logo/logo.png";

interface HeaderMinimalProps {
  transparent?: boolean;
}

const HeaderMinimal: React.FC<HeaderMinimalProps> = ({ transparent = false }) => {
  return (
    <header
      className={`w-full py-4 border-b ${
        transparent ? "border-transparent absolute top-0 left-0 z-50" : "border-gray-200 bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderMinimal;
