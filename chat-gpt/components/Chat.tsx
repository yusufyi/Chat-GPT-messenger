import React from "react";
type Props = {
  chatId: string;
};
const Chat = ({ chatId }: Props) => {
  console.log(chatId);
  return <div>Chat Id:{chatId}</div>;
};

export default Chat;
