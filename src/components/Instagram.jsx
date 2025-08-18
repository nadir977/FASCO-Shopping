import React from 'react'
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";

const Instagram = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] pt-10 mb-10 md:pt-32 md:mb-32">

      <p className="Instagram_h1 font-[400] text-[34px] md:text-[46px] text-[#484848]">
        Follow Us On Instagram
      </p>
      <p className="pt-2 pb-24 text-center text-[#8A8A8A] text-[16px] px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> 
        ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center gap-4 md:gap-0">
        <div className="w-full h-[300px] overflow-hidden">
          <img src={image5} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[350px] overflow-hidden">
          <img src={image6} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[300px] overflow-hidden">
          <img src={image7} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[350px] overflow-hidden">
          <img src={image8} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[300px] overflow-hidden">
          <img src={image9} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[350px] overflow-hidden">
          <img src={image10} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[300px] overflow-hidden">
          <img src={image11} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  )
}

export default Instagram
