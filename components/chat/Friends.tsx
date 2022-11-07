import React from "react";
import Friend from "./Friend";
import styles from "./chat.module.css";

type IFriend = {
  profile_img: string;
  name: string;
  new_messages_count: number;
  last_message: string;
  time: string;
};

type IFriendProps = {
  friends: IFriend[];
};

const Friends = (props: IFriendProps) => {
  const { friends } = props;
  return (
    <div className={`${styles.friends}`}>
      {friends.map((friend, index) => {
        return <Friend key={index} friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
