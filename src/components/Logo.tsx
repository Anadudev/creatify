import React from "react";
import Link from "next/link";


const Logo = ({ link }: { link?: string }) => {
  return (
    <Link href={link || "/"} className="text-2xl font-extrabold flex items-center justify-center">
      <span className="bg-gradient-to-r from-violet-200 to-violet-700 bg-clip-text font-extrabold text-transparent text-5xl">
        C
      </span>
      <div className="-ml-3 -mt-0.5">reatify</div>
    </Link>
  );
};

export default Logo;
