const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 my-4 bg-base-200 p-4 rounded-md">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Celestia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
