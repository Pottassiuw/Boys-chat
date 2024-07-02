import { getServerSession } from "next-auth";

const page = async ({}) => {
  const session = await getServerSession();
  return <pre>Dashboard</pre>;
};

export default page;
