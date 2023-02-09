import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div
      className="p-2 flex 
    flex-col h-screen"
    >
      <NewChat />
      <div>{/*Mode Selection*/}</div>

      {/*Map throught the ChatRows */}
    </div>
  );
};

export default SideBar;
