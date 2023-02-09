"use client";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div
      className="p-2 flex 
    flex-col h-screen"
    >
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/*Mode Selection*/}</div>

          {/*Map throught the ChatRows */}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          onClick={() => signOut()}
        ></img>
      )}
    </div>
  );
};

export default SideBar;
