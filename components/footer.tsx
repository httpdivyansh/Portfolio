import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb=[100px] " id="contact">
      
      

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=divyanshjain6134@gmail.com">
        <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Divyansh Jain
        </p>

        <div className="flex items-center sm:pt-6 md:gap-3 gap-6">
            <div
              className=" w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://github.com/httpdivyansh">
              <img src="git.svg" alt="icons" width={20} height={20} />
              </a>
            </div>
            {/* LinkedIn*/}
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.linkedin.com/in/divyansh-jain-44b192247/">
              <img src="link.svg" alt="icons" width={20} height={20} />
              </a>
            </div>       
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.instagram.com/divyanshxxd/">
              <img src="instagram.svg" alt="icons" width={20} height={20} />
              </a>
            </div>     
        </div>
      </div>
    </footer>
  );
};

export default Footer;
