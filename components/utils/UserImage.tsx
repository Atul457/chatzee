import React from "react";
import { getImage } from "../../helpers/helper";
import { IProfileImage } from "../../helpers/types";

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
      className={`bg-white w-[${height}px] h-[${width}px] rounded-full overflow-hidden${` ${props?.className}` ?? ""}`}
    >
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
  );
};

export default UserImage;
