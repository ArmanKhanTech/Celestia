import Image from "next/image";

const FeatureFour = () => {
  return (
    <div className="gap-8 lg:gap-16 items-center justify-center flex py-16 flex-col lg:flex-row">
        <div className="h-full lg:w-1/2">
          <h2 className="mb-4 text-3xl tracking-tight font-bold">
          Free for Everyone
          </h2>
          <p className="mb-4 text-xl">
          Celestia is an independent nonprofit. We&apos;re not tied to any major tech companies, and we can never be 
          acquired by one either. Development is supported by grants and donations from people like you.
          </p>
        </div>
        <div className="h-full w-full lg:w-1/2 shadow-lg">
          <Image
            className="w-full h-full rounded-md object-cover"
            height={1080}
            width={1920}
            priority={true}
            src="/images/features/feature-four.png"
            alt="Feature Four Image"
          />
        </div>
      </div>
  );
};

export default FeatureFour;
