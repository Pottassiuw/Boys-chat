import { FC } from "react";
import AddFriendButton from "@/components/AddFriendButton";
const page: FC = ({}) => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">add a friend!</h1>
      <AddFriendButton />
    </main>
  );
};

export default page;
