import Image from "next/image";

const FeatureTwo = () => {
  const featureTwo = [
    {
      id: 1,
      title: "Say Anything",
      img: "/images/features/feature-two-1.png",
      description:
        "Share text, audio, photos, GIFs and files for free. Celestia uses your phone's data connection so you can avoid SMS and MMS fees.",
    },
    {
      id: 2,
      title: "Speak Freely",
      img: "/images/features/feature-two-2.png",
      description:
        "Make safe and secure conversations with people who live across town, or across the ocean, with no long-distance charges.",
    },
    {
      id: 3,
      title: "Make Privacy Stick",
      img: "/images/features/feature-two-3.png",
      description:
        "Add a new layer of expression to your conversations with encrypted stickers. You can also create and share your own sticker packs.",
    },
    {
      id: 4,
      title: "Make Privacy Stick",
      img: "/images/features/feature-two-4.png",
      description:
        "Group chats make it easy to stay connected to your family, friends, and coworkers.",
    },
  ];

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
