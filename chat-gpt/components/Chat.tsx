import React from "react";
type Props = {
  chatId: string;
};
const Chat = ({ chatId }: Props) => {
  console.log(chatId);
  return <div className="flex-1">Chat dId:{chatId}</div>;
};

export default Chat;
