"use client";
import MeetingOptions from "@/components/ui/MeetingOptions";
import { useState, useEffect } from "react";
import Clock from "react-live-clock";
import React from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const local_time = new Date();

  const date = new Intl.DateTimeFormat("en-in", {
    dateStyle: "full",
  }).format(local_time);

  return (
    <section className=" flex size-full flex-col gap-10 lg:mt-10 text-white">
      <div className=" text-black flex flex-col lg:flex-row gap-2 pt-18">
        <h1 className=" text-4xl font-bold lg:text-6xl font-sans">
          {isClient && <Clock format={"h:mm a"} ticking={true} />}
        </h1>
        <p className=" text-lg font-medium text-sky-950 lg:text-2xl lg:pt-6 lg:pl-4 font-sans">
          {isClient && date}
        </p>
      </div>
      <MeetingOptions />
    </section>
  );
};

export default Home;
