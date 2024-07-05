"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { signOut } from "next-auth/react";

export default function Home() {
  return <Button onClick={() => signOut()}>Logout</Button>;
}
