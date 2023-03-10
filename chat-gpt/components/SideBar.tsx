"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

import React from "react";
import NewChat from "./NewChat";
import Image from "next/image";
import { collection } from "@firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "user", session.user?.email!, "chats")
  );
  console.log(chats);
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
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          src={session.user ? session.user?.image! : ""}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          onClick={() => signOut()}
        ></img>
      )}
    </div>
  );
};

export default SideBar;
