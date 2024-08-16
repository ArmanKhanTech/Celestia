import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-8 lg:flex-row bg-contain h-[80vh] rounded-xl mt-3 mb-32 bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
    >
      <div className="w-full h-1/2 p-5 lg:w-1/2 self-center rounded-lg">
        <h1 className="text-3xl font-semibold lg:text-6xl text-white">
          Speak Freely
        </h1>
        <p className="mt-8 max-w-md text-xl text-white">
          Say &apos;hello&apos; to a different messaging experience. An
          unexpected focus on privacy, combined with all of the features you
          expect.
        </p>
      </div>
      <div className="w-full h-1/2 lg:h-full lg:w-1/2">
        <div className="w-full h-full">
          <Image
            width={1920}
            height={1080}
            src="/images/hero/hero.jpg"
            alt="Hero Phone"
            className="w-full h-full object-cover rounded-b-md lg:rounded-none lg:rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
