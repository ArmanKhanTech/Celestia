import Image from "next/image";

const FeatureThree = () => {
  return (
    <div className="gap-8 lg:gap-16 items-center justify-center flex py-16 flex-col lg:flex-row">
       <div className="h-full w-full lg:w-1/2 shadow-lg">
          <Image
            className="w-full h-full rounded-md object-cover"
            height={1080}
            width={1920}
            priority={true}
            src="/images/features/feature-three.png"
            alt="Feature Three Image"
          />
        </div>
        <div className="h-full lg:w-1/2">
          <h2 className="mb-4 text-3xl tracking-tight font-bold">
            No ads. No trackers. No kidding.
          </h2>
          <p className="mb-4 text-xl">
            There are no ads, no affiliate marketers, and no creepy tracking in Celestia. 
            So focus on sharing the moments that matter with the people who matter to you.
          </p>
        </div>
      </div>
  );
};

export default FeatureThree;
