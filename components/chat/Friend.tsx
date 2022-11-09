// import Image from "next/image";
import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import styles from "./chat.module.css";
import UserImage from "../utils/UserImage";
import { switchChat } from "../../redux/slices/chatSlice";
import { IFriend } from "../../helpers/types";

type IActionType = {
  type: string;
};

const Friend = (props: {
  friend: IFriend;
  isLastIndex: Boolean;
  dispatch: Dispatch<IActionType>;
}) => {
  const { friend, dispatch, isLastIndex } = props;

  // Functions
  const switchChatFn = () => {
    dispatch(switchChat(friend));
  };
  return (
    <>
      <div
        className={`w-full p-1 md:p-2 py-2 cursor-pointer mb-1 flex items-start justify-start ${
          isLastIndex ? {} : styles.friend
        } hover:bg-blue-600 hover:rounded-md`}
        onClick={() => switchChatFn()}
      >
        <div className={styles.profile_img}>
          <UserImage
            name={friend.name}
            height={40}
            width={40}
            index={friend.index}
          />
          {/* <Image
          src={friend?.profile_img}
          alt="friend_image"
          className="rounded-full"
          fill={true}
        /> */}
        </div>
        <div className={styles.chat_right_sec}>
          <div className="w-full flex items-center">
            <div className="friend_name text-slate-300 font-semibold w-8/12">
              {friend.name}
            </div>
            <div className="text-right text-[12px] text-slate-200 w-4/12">
              {friend.time}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="truncate last_message text-[13px] text-slate-200 w-9/12">
              {friend.last_message}
            </div>

            {/* New messages count */}
            {friend.new_messages_count ? (
              <div className="w-5 h-5 relative">
                <span className="new_messages_count rounded-full bg-[#08E05C] py-1 w-5 h-5 absolute right-0 flex items-center justify-center">
                  <span className="text-[12px] text-slate-300 font-bold">
                    {friend.new_messages_count}
                  </span>
                </span>
              </div>
            ) : null}
            {/* New messages count */}
          </div>
        </div>
      </div>
      <>
        {isLastIndex ? (
          <div className="text-center text-sm text-slate-300 mt-5 mb-2 font-semibold">
            End of friends
          </div>
        ) : null}
      </>
    </>
  );
};

export default Friend;
