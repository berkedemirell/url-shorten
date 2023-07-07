import img from "/src/images/illustration-working.svg";

export const Header = () => {
  return (
    <div className="pl-32 pr-32 pt-16 font-pop h-full mt-12 sml:pl-36 sml:pr-36 smm:pt-0">
      <div className="flex flex-row items-center justify-center sml:flex-col">
        <div className="flex flex-col items-start justify-center sml:items-center sml:text-center">
          <h1 className="text-7xl font-bold text-dark-blue mb-2 leading-tight md-v2:text-6xl sml:text-4xl sml:text-3xl sms:text-2xl">
            More than just shorter links
          </h1>
          <div className="w-34r sml:text-center sml:w-25r smm:w-20r smm:w-15r sms:w-12r">
            <span className="text-lg font-medium text-gray-violet font-semibold sml:text-xs">
              Build your brand`s recognition and get detailed insights on how
              your links are performing.
            </span>
          </div>
          <button className="mt-10 bg-mainCyan rounded-full pt-3 pb-3 pl-8 pr-8 text-mainWhite font-bold pr-6 hover:opacity-60 transition-all duration-500 sml:pr-4 sml:pt-2 sml:pb-2 sml:pl-4 sml:mb-10 sms:p-2 sms:text-sm">
            Get Started
          </button>
        </div>
        <div className="smm:h-30 smm:mt-4 smm:w-15r sms:w-12r sms:h-20">
          <img src={img} alt="image" className="w-102 h-102" />
        </div>
      </div>
    </div>
  );
};

export default Header;
