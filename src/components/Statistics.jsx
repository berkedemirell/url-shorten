import brandRec from "/src/images/icon-brand-recognition.svg";
import detailedImg from "/src/images/icon-detailed-records.svg";
import customizedImg from "/src/images/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <div className="pr-32 pl-32 font-pop pb-40 mb-10 md:p-4 md:pb-40 sml:pr-32 sml:pl-32">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center mb-16 sml:p-10 smm:text-center">
          <h1 className="text-dark-violet text-4xl font-bold mb-2 md-v2:text-2xl sml:text-md smm:text-3xl">
            Advanced Statistics
          </h1>
          <span className=" text-lg w-34r text-center smm:w-15r font-semibold text-gray md-v2:text-sm sml:text-xs sml:w-fit sml:w-25r">
            Track how your links are performing across the web with our advenced
            statistics dashboard.
          </span>
        </div>
        <div className="flex flex-row gap-10 sml:flex-col">
          <div className="w-1/3 bg-mainWhite p-6 rounded-lg pt-4 pb-8 smm:w-15r">
            <div className="transform -translate-y-14 translate-x-4 sml:-translate-y-10 bg-mainPurple w-5r h-20 rounded-full flex justify-center sml:h-12 sml:w-3r">
              <img src={brandRec} alt="" className="p-6 sml:p-3"/>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-dark-violet mb-4 md-v2:text-lg sml:text-md">
                Brand Recognition
              </h1>
              <p className="text-md text-gray font-normal md-v2:text-sm">
                Boost your brand recognition with each click. Generic links
                don`t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-mainWhite p-6 rounded-lg pt-4 pb-8 transform translate-y-12">
            <div className="transform -translate-y-14 translate-x-4 bg-mainPurple sml:-translate-y-10 w-5r h-20 rounded-full flex justify-center sml:h-12 sml:w-3r">
              <img src={detailedImg} alt="" className="p-6 sml:p-3"/>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-dark-violet mb-4 md-v2:text-lg sml:text-md">
                Detailed Records
              </h1>
              <p className="text-md text-gray font-normal md-v2:text-sm">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-mainWhite p-6 rounded-lg pt-4 pb-8 transform translate-y-24">
            <div className="transform -translate-y-14 translate-x-4 bg-mainPurple w-5r h-20 rounded-full flex justify-center sml:-translate-y-10 sml:h-12 sml:w-3r">
              <img src={customizedImg} alt="" className="p-6 sml:p-3" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-dark-violet mb-4 md-v2:text-lg">
                Fully Customizable
              </h1>
              <p className="text-md text-gray font-normal md-v2:text-sm">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
