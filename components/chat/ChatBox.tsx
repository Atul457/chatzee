import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IChatBoxStoreType, IChatType } from "../../helpers/types";
import UserImage from "../utils/UserImage";
import { FaArrowLeft } from "react-icons/fa";
import { switchChat } from "../../redux/slices/chatSlice";
import { AiOutlineSend } from "react-icons/ai";
import styles from "./chat.module.css";

const ChatBox = () => {
  // Hooks and vars
  const dispatch = useDispatch();
  const chat: IChatType = useSelector<IChatBoxStoreType>(
    (store) => store.chat
  ) as IChatType;
  const opened_chat = chat.opened_chat;
  const haveNoFriends = Object.keys(opened_chat).length === 0;
  const sendMessageBoxRef = useRef<HTMLInputElement>(null);

  // Empty message box on switch chat
  useEffect(() => {
    if (sendMessageBoxRef?.current) sendMessageBoxRef.current.value = "";
  }, [opened_chat]);

  // Functions
  const closeOpenedChat = () => {
    dispatch(switchChat({}));
  };

  return (
    <>
      {!haveNoFriends ? (
        <div className="bg-slate-700 h-full w-full rounded-2xl relative overflow-hidden">
          <header className="sticky top-0 w-full p-3 py-2 md:py-3 bg-blue-600 flex flex-wrap items-center text-white">
            <section className="flex items-center">
              <FaArrowLeft
                className="mr-2 text-white cursor-pointer md:hidden"
                onClick={closeOpenedChat}
              />
              <UserImage
                width={40}
                height={40}
                name={opened_chat?.name}
                className="mr-2"
              />
              <span className="capitalize font-semibold">
                {opened_chat?.name}
              </span>
            </section>
          </header>
          <footer className="w-full bottom-0 p-3 flex flex-wrap items-center justify-between absolute">
            <input
              type="text"
              ref={sendMessageBoxRef}
              className={`rounded-3xl py-2 px-3 outline-none bg-white text-black ${styles.send_message_box}`}
              placeholder="Type a message"
            />
            <div className="flex items-center justify-center min-w-[40px]">
              <AiOutlineSend className="bg-blue-600 rounded-full p-2 w-[35px] h-[35px] cursor-pointer" />
            </div>
          </footer>
        </div>
      ) : (
        <div className="text-white text-3xl">
          {haveNoFriends
            ? "No chats to show"
            : "Open a chat to start conversation"}
        </div>
      )}
    </>
  );
};

export default ChatBox;
