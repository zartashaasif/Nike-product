import React from "react";
import shoe from "../images/shoe.png";
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

function Herosection() {
  return (
    <>
      <div className="max-w-[1057px] mx-auto pt-[90px] flex justify-between items-center">
        <div>
          <h2 className="w-[595px] text-[108px] font-extrabold leading-none ">
            YOUR FEET DESERVE THE BEST
          </h2>
          <div>
            <p className="w-[404px] p-9 text-[16px] font-semibold text-[#5A5959]">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="mb-10 ml-8">
            <button className="bg-[#D01C28] text-[#FFFFFF] w-[118px] h-[29px] font-semibold">Shop Now</button>
            <p className="pt-9 text-[16px] font-normal text-[#5A5959]">Also Avaliable on:</p>
            <div className="flex gap-3 pt-5">
            <AiFillFacebook size={30} />
            <AiFillInstagram  size={30}/>
             <AiFillTwitterSquare size={30} />
             <AiFillLinkedin size={30} />
            </div>
          </div>
        </div>
        <div>
          <img src={shoe} />
        </div>
      </div>
    </>
  );
}

export default Herosection;
