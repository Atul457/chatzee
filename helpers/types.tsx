export default interface IAuthLayoutProps {
  children: React.ReactNode;
  pageName: string;
  link: string;
  linkName: string;
  title: string;
  linkDesc: string;
}

export type IProfileImage = {
  name: string;
  color: string;
  bgColor: string;
};

export type IFriend = {
  profile_img: string;
  name: string;
  new_messages_count: number;
  last_message: string;
  time: string;
  index?: number;
};

export type IChatBoxProps = {
  user_details: {
    name: string;
    profile_pic:
      | string
      | {
          color?: string;
          bgColor: string;
          letters: string;
        };
    user_id: string;
  };
};

export type IChatType = {
  opened_chat: IFriend;
  friends: IFriend[];
};

export type IChatBoxStoreType = {
  chat: IChatType;
  friends?: IFriend[];
};

export type IFriendProps = {
  friends: IFriend[];
};
