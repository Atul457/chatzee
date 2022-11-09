import React from "react";
import { getImage } from "../../helpers/helper";
import { IProfileImage } from "../../helpers/types";
import styles from "../../components/chat/chat.module.css";

type IUserImageProps = {
  name: string;
  index?: number;
  height: number;
  width: number;
  className?: string;
};

const UserImage = (props: IUserImageProps) => {
  // Vars
  const { height, width } = props;
  const { name, color, bgColor }: IProfileImage = getImage(
    props.name,
    props.index
  );

  return (
    <div
      className={`bg-white rounded-full h-[40px] w-[40px] overflow-hidden${
        ` ${props?.className}` ?? ""
      }`}
    >
      <div
        className={`w-full h-full flex justify-center items-center ${styles.profile_img}`}
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
  );
};

export default UserImage;
