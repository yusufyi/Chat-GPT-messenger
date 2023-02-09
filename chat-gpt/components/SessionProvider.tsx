"use client";

import React, { Children } from "react";
import { Session } from "next-auth";
import { SessionProvider as Proider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
  session: Session | null;
};
const SessionProvider = ({ children, session }: Props) => {
  return <Proider>{children}</Proider>;
};

export default SessionProvider;
