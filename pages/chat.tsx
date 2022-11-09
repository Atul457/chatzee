import React, { useEffect } from "react";
import Friends from "../components/chat/Friends";
import friendsData from "../helpers/friends.json";
import styles from "../components/chat/chat.module.css";
import ChatBox from "../components/chat/ChatBox";
import { IChatType, IChatBoxStoreType } from "../helpers/types";
import { useDispatch, useSelector } from "react-redux";
import { handleFriends, switchChat } from "../redux/slices/chatSlice";

const Chat = () => {
  // Hooks and vars
  const dispatch = useDispatch();
  const { friends, opened_chat } = useSelector<IChatBoxStoreType>(
    (store) => store.chat
  ) as IChatType;
  const haveNoFriends: Boolean = friends.length === 0;
  const noChatOpened: Boolean = Object.keys(opened_chat).length === 0;

  useEffect(() => {
    dispatch(handleFriends([...friendsData]));
  }, []);

  return (
    <div className="w-full flex flex-wrap">
      {/* friends */}
      <aside
        className={`w-full md:block min-w-[25%] md:w-[40%] lg:w-[30%] xl:w-[25%] ${
          !noChatOpened ? "hidden" : ""
        }`}
      >
        {haveNoFriends ? <div className="text-center">No friends to show</div> : <Friends friends={friends} />}
      </aside>
      {/* friends */}
      {/* opened chat section */}
      <section
        className={`md:block w-full px-0 md:w-[60%] lg:w-[70%] xl:w-[75%] md:px-5 h-[300px] ${
          noChatOpened ? "hidden" : ""
        } md:block ${styles.chat_section}`}
      >
        <div className="w-full flex h-full items-center justify-center">
          <ChatBox />
        </div>
      </section>
      {/* opened chat section */}
    </div>
  );
};

export default Chat;
