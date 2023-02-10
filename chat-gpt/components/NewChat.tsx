import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    const doc = await addDoc(
      collection(db, "user", session?.user?.email!, "chats"),
      {
        message: [],
        userId: session?.user?.email!,
        createAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />

      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
