import logo from "/src/images/logo.svg";
import twitter from "/src/images/icon-twitter.svg";
import instagram from "/src/images/icon-instagram.svg";
import facebook from "/src/images/icon-facebook.svg";
import pinterest from "/src/images/icon-pinterest.svg";

export const Footer = () => {
  return (
    <div className="bg-lightBlack text-mainWhite flex flex-row items-start justify-around p-20 md-v2:p-0 md-v2:pt-12 md-v2:pb-4 sml:flex-col sml:items-center sml:gap-10">
      <div className="ml-12 mr-24 md:m-0">
        <img src={logo} alt="" className="" />
      </div>
      <div className="flex flex-col h-24 sml:justify-center sml:items-center">
        <h1 className="mb-3 font-bold">Features</h1>
        <div className="flex flex-col gap-0.5 text-gray-violet font-bold text-sm sml:items-center">
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Link Shortening
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Branded Links
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Analytics
          </a>
        </div>
      </div>
      <div className="flex flex-col h-24 sml:items-center">
        <h1 className="mb-3 font-bold">Resources</h1>
        <div className="flex flex-col gap-0.5 text-gray-violet text-sm font-bold sml:items-center">
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Developers
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Support
          </a>
        </div>
      </div>
      <div className="flex flex-col h-24 sml:items-center">
        <h1 className="font-bold mb-3">Company</h1>
        <div className="flex flex-col gap-0.5 text-gray-violet font-bold text-sm sml:items-center">
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Our Team
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-mainCyan transition-all duration-500"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center gap-4 justify-start md:flex-col sml:mt-6 sml:flex-row">
          <a href="#">
            <img
              src={facebook}
              alt=""
              className="hover:fill-current hover:bg-mainCyan"
            />
          </a>
          <a href="#">
            <img
              src={instagram}
              alt=""
              className="hover:fill-current hover:bg-mainCyan rounded-md"
            />
          </a>
          <a href="#">
            <img
              src={twitter}
              alt=""
              className="hover:fill-current hover:bg-mainCyan rounded-md"
            />
          </a>
          <a href="#">
            <img
              src={pinterest}
              alt=""
              className="hover:fill-current hover:bg-mainCyan rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
