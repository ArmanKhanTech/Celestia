const AboutPage = () => {
  return (
    <section className="flex flex-col items-start justify-start p-3 lg:p-6 gap-2 w-full h-full">
      <p className="text-3xl font-semibold text-start">About Us</p>
      <p className="text-xl mt-4">
        Celestia is a simple, powerful, and secure messenger that allows you to
        communicate with your friends and family.
      </p>
      <p className="text-xl">
        We are committed to providing you with the best experience possible
        along with the highest level of security.
      </p>
      <p className="text-xl">
        If you have any questions, please contact us at
        <a href="mailto:ak2341776@gmail.com" className="text-blue-500">
          {" "}
          here.
        </a>
      </p>
      <p className="text-xl">Thank you for using Celestia!</p>
      <p className="text-xl">Version: 1.0.0</p>
      <p className="text-xl mt-4">
        Best Regards, <br />
        Arman Khan
      </p>
    </section>
  );
};

export default AboutPage;
