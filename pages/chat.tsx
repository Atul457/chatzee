import React from "react";
import Friends from "../components/chat/Friends";

const Chat = () => {
  const friends = [
    {
      name: "Atul Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 0,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Anmol Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 2,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
    {
      name: "Sonam Singh",
      profile_img: "/icons/facebook.svg",
      new_messages_count: 6,
      last_message: "hey how are you",
      time: "12:00 AM",
    },
  ];

  return (
    <div className="w-full flex flex-wrap">
      <aside className="md:w-2/6 2xl:w-1/6 w-full">
        <Friends friends={friends} />
      </aside>
      {/* opened chat section */}
      <section className="md:w-4/6 2xl:w-5/6 px-5 h-[300px] hidden md:block">
        <div className="w-full flex h-full items-center justify-center">
          <h1 className="text-3xl">Chats</h1>
        </div>
      </section>
      {/* opened chat section */}
    </div>
  );
};


export default Chat;
