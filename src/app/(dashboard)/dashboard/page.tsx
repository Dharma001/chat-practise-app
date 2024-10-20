import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {

  const session = await getServerSession(authOptions)
  return(
    <>
    <pre>Dashboard</pre>
    <p>Welcome {session.user.name}</p>
    </>
  )

}
export default page