"use client";
import React, { useState } from "react";
import MeetingCards from "./MeetingCards";
import MeetingMMS from "./MeetingMMS";

const MeetingOptions = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isInstantMeeting" | "isJoiningMeeting" | undefined
  >();

  const createMeeting = () => {};

  return (
    <section className=" grid grid-cols-1 gap-5 lg:grid-cols-3">
      <MeetingCards
        img="/icons/add-meeting.png"
        title="New Meeting"
        description="Create a new meeting link"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-500"
      />
      <MeetingCards
        img="/icons/join-meeting.png"
        title="Join Meeting"
        description="Join via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-green-600"
      />
      <MeetingCards
        img="/icons/add-meeting.png"
        title="Schedule Meeting"
        description="Create and schedule a meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-pink-600"
      />

      {/* <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          className=" bg-orange-500 px-4 md:px-6 py-5 md:pt-6 md:pb-8 flex flex-col justify-between w-full  min-h-[180px] md:min-h-[260px] rounded-[20px] cursor-pointer"
          onClick={() => {}}
        >
          <div className=" flex-center size-12">
            <Image
              src={"/icons/add-meeting.png"}
              alt="meeting"
              width={35}
              height={35}
            />
          </div>
          <div className=" flex flex-col gap-2 md:gap-4">
            <h1 className=" text-2xl md:text-4xl font-bold font-sans">
              New Meeting
            </h1>
            <p className=" text-lg font-normal font-sans">
              Create a new meeting link
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {" "}
        <div
          className=" bg-green-600 px-4 md:px-6 py-5 md:pt-6 md:pb-8 flex flex-col justify-between w-full  min-h-[180px] md:min-h-[260px] rounded-[20px] cursor-pointer"
          onClick={() => {}}
        >
          <div className=" flex-center size-12">
            <Image
              src={"/icons/join-meeting.png"}
              alt="meeting"
              width={35}
              height={35}
            />
          </div>
          <div className=" flex flex-col gap-2 md:gap-4">
            <h1 className=" text-2xl md:text-4xl font-bold font-sans">
              Join Meeting
            </h1>
            <p className=" text-lg font-normal font-sans">
              Join via invitation link
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          className=" bg-pink-600 px-4 md:px-6 py-5 md:pt-6 md:pb-8 flex flex-col justify-between w-full  min-h-[180px] md:min-h-[260px] rounded-[20px] cursor-pointer"
          onClick={() => {}}
        >
          <div className=" flex-center size-12">
            <Image
              src={"/icons/add-meeting.png"}
              alt="meeting"
              width={35}
              height={35}
            />
          </div>
          <div className=" flex flex-col gap-2 md:gap-4">
            <h1 className=" text-2xl md:text-4xl font-bold font-sans">
              Schedule Meeting
            </h1>
            <p className=" text-lg font-normal font-sans">
              Create and schedule a meeting
            </p>
          </div>
        </div>
      </motion.div> */}

      <MeetingMMS
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Create & Start Your Meeting"
        className="text-center"
        buttonText="Start"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingOptions;
