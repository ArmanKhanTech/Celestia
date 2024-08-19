import Image from "next/image";

const FeatureOne = () => {
  return (
    <div className="gap-8 lg:gap-16 items-center justify-center flex py-16 flex-col lg:flex-row">
      <div className="h-full lg:w-1/2">
        <h2 className="mb-4 text-3xl tracking-tight font-bold">
          Share Without Insecurity
        </h2>
        <p className="mb-4 text-xl">
          State-of-the-art end-to-end encryption keeps your conversations
          secure. We can&apos;t read your messages, and no one else can either.
          Privacy isn&apos;t an optional mode - it&apos;s just the way that
          Celestia works. Every message, every time.
        </p>
      </div>
      <div className="h-full w-full lg:w-1/2 shadow-lg">
        <Image
          className="w-full h-full rounded-md object-cover"
          height={1080}
          width={1920}
          priority={true}
          src="/images/features/feature-one.jpg"
          alt="Feature One Image"
        />
      </div>
    </div>
  );
};

export default FeatureOne;
