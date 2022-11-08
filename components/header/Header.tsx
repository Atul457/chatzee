import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-gray-900 px-1 w-100 py-4 md:py-5 z-[99]">
      <div className="flex justify-between flex-wrap items-center">
        <span>
          <Image
            src="/ChatZeeLogo.png"
            alt="Group 30"
            width={120}
            height={45}
          />
        </span>

        <section className="links_sec pl-5 flex items-center text-[#00EAFF] cursor-pointer">
          <span className="mr-3 text-lg font-semibold hover:text-[#00ccff]">Login</span>
          <span className="text-lg font-semibold hover:text-[#00ccff]">Register</span>
        </section>
      </div>
    </header>
  );
};

export default Header;
