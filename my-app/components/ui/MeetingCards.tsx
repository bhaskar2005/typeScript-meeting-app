import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const MeetingCards = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div>
      <motion.div
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <div
          className={cn(
            " px-4 md:px-6 py-5 md:pt-6 md:pb-8 flex flex-col justify-between w-full  min-h-[180px] md:min-h-[260px] rounded-[20px] cursor-pointer",
            className
          )}
          onClick={handleClick}
        >
          <div className=" flex-center size-12">
            <Image src={img} alt="meeting" width={35} height={35} />
          </div>
          <div className=" flex flex-col gap-2 md:gap-4">
            <h1 className=" text-2xl md:text-4xl font-bold font-sans">
              {title}
            </h1>
            <p className=" text-lg font-normal font-sans">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MeetingCards;
