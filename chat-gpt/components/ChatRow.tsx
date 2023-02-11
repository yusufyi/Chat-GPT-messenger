import { collection } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "user", session?.user?.email!, "chats", id, "messages")
  );
  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  });

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active && "bg-gray-700/350"}`}
    >
      link
    </Link>
  );
};

export default ChatRow;
