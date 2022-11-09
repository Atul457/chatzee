import React, { useEffect } from "react";
import Friend from "./Friend";
import styles from "./chat.module.css";
import { useDispatch } from "react-redux";
import { IFriendProps } from "../../helpers/types";
import { switchChat } from "../../redux/slices/chatSlice";

const Friends = (props: IFriendProps) => {
  // Hooks and vars
  const dispatch = useDispatch();
  const { friends } = props;
  const isMobile = window ? window?.innerWidth < 768 : false;
  useEffect(() => {
    if (!isMobile && friends?.length)
      dispatch(switchChat({ ...friends[0], index: 0 }));
    if (isMobile) dispatch(switchChat({}));
  }, [friends, isMobile, dispatch]);

  return (
    <div className={`${styles.friends}`}>
      {friends.map((friend, index) => {
        return (
          <Friend
            key={index}
            isLastIndex={friends?.length === index + 1}
            friend={{ ...friend, index }}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default Friends;
