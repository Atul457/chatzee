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

export type IUserCredentials = {
  email: string;
  password: string;
};

export type ILoginRes = {
  status: boolean;
  message: string;
  body: {
    profile: ILoggerInUserDetails;
    token: string;
  };
};

export type ILoggerInUserDetails = {
  name: string;
  email: string;
  image: string;
  user_id: string;
};

export type IStatus = {
  loading: string;
  idle: string;
  fulfilled: string;
  rejected: string;
};

export type IApiRes = {
  status: "loading" | "idle" | "fulfilled" | "rejected";
  message: string;
};

export interface defaultProps {
  userDetails: ILoggerInUserDetails;
}

export interface IReusableCompProps {
  color?: string;
  className?: string | null;
}

export interface IViewLoaderProps extends IReusableCompProps {
  bgColor?: string;
  size?: "sm" | "lg" | "md" | "xsm" | "xl";
  isPageLoader?: boolean;
}

export interface IMessageCompProps extends IReusableCompProps {
  message: string;
  isError: boolean;
}

export type IProgress = null | "start" | "done";