"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";

type Props = {
  src: string;
  style: string;
};

const Pfp = ({ src, style }: Props) => {
  return (
    <div className={`bg-base-200 ${style} flex items-center justify-center`}>
      {src && src !== "null" ? (
        <Image
          src={src}
          alt="PFP"
          width={1920}
          height={1080}
          className="rounded-md w-full h-full object-cover"
        />
      ) : (
        <FaUser className="w-1/2 h-1/2" />
      )}
    </div>
  );
};

export default Pfp;
