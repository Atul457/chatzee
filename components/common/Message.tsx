import React from "react";
import { IMessageCompProps } from "../../helpers/types";

const Message = (props: IMessageCompProps) => {
  const { isError, message, color = undefined, className = undefined } = props;
  const color_value = color ?? (isError ? "#f1091f" : "#28a745");
  return (
    <div
      role="status"
      className={`${className ? className : "mb-1.5 text-sm font-semibold"}`}
      style={{ color: color_value }}
    >
      {message}
    </div>
  );
};

export default Message;
