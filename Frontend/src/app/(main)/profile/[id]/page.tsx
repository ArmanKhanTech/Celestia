import Image from "next/image";

const ProfilePage = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-full p-3 lg:p-6">
      {/* TODO: Add edit if current user is the owner. */}
      <p className="text-3xl font-semibold">Profile</p>
      {/* TODO: Add placeholder. */}
      <Image
        width={96}
        height={96}
        src=""
        alt="User Avatar"
        className="rounded-full h-24 w-24 mt-4"
      />
      <div className="flex flex-col items-start justify-start">
        <p className="text-lg font-semibold">Username</p>
        <p className="text-lg font-semibold">Name</p>
        <p className="text-lg font-semibold">Date Joined</p>
      </div>
    </section>
  );
};

export default ProfilePage;
