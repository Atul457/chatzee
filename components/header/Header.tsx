import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className="px-1 py-3 w-100">
        <Image src="/ChatZeeLogo.png" alt="Group 30" width={120} height={45} />
      </div>
    </header>
  );
};

export default Header;
