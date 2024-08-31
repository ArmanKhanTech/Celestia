"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";

type PfpProps = {
  src: string;
  img_props: string;
  hol_props: string;
};

const Pfp = ({ src, props }: PfpProps) => {
  return (
    <div className={`bg-base-200 ${props} flex items-center justify-center`}>
      {src && src !== "null" ? (
        <Image
          src={src}
          alt="Profile Picture"
          width={64}
          height={64}
          className="rounded-md w-full h-full object-cover"
        />
      ) : (
        <FaUser className="m-4 w-full h-full" />
      )}
    </div>
  );
};

export default Pfp;
