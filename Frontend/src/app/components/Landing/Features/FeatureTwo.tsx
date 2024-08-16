import Image from "next/image";

import { featureTwo } from "@/lib/constants";

const FeatureTwo = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 py-16">
      {featureTwo.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col items-center justify-center p-6 bg-base-200 rounded-md shadow-lg"
        >
          <Image
            src={feature.img}
            alt={feature.title}
            width={1920}
            height={1080}
          />
          <h2 className="text-2xl mt-4 font-semibold">{feature.title}</h2>
          <p className="mt-4 text-lg text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureTwo;
