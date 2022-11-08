// import Image from "next/image";
import React from "react";
import { randomColor } from "../../helpers/helper";
import styles from "./chat.module.css";

type IFriend = {
  profile_img: string;
  name: string;
  new_messages_count: number;
  last_message: string;
  time: string;
  index: number;
};

function getImage(name: string): string {
  let tempName: string = name
    .split(" ")
    .slice(0, 2)
    .reduce((acc, curr) => {
      return acc + curr.charAt(0).toUpperCase() ?? "";
    }, "");
  return tempName;
}

const Friend = (props: { friend: IFriend }) => {
  const { friend } = props;
  const name: string = getImage(friend.name);
  const color: string = randomColor();
  const bgColor: string = `${color}4D`;

  return (
    <div
      className={`w-full p-1 md:p-2 py-2 cursor-pointer mb-1 flex items-start justify-start ${styles.friend}`}
    >
      <div className={styles.profile_img}>
        <div className="bg-white w-[40px] h-[40px] rounded-full overflow-hidden">
          <div
            className={`w-full h-full flex justify-center items-center`}
            style={{
              background: bgColor,
            }}
          >
            <span
              className={`font-bold`}
              style={{
                color,
              }}
            >
              {name}
            </span>
          </div>
        </div>
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
  );
};

export default Friend;
