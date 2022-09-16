const Footer = ({ texts }) => {
  return (
    <footer
      className={`p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-white dark:bg-gray-800 `}
    >
      <span className="text-sm text-gray-500 sm:text-center dark:text-white">
        {texts.footerTitle}
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-white sm:mt-0">
        <li>
          <a href="#1" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#1" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#1" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#1" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
