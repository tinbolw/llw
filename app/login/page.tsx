import { auth } from "@/auth";
import {GoogleSignOut, GoogleSignIn} from "@/app/ui/google-auth";

export default async function Login() {
  const session = await auth();
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="md:text-3xl text-center">Login</h1>
        <p className="text-center">
          Unless you have access, there is nothing to see here.
        </p><br />
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* could add custom user database in future */}
        {/* <input
          placeholder="Username"
          className="bg-[#2B2D31] rounded-lg w-1/6 text-xl text-center"
        ></input><br />
        <input
          placeholder="Password"
          className="bg-[#2B2D31] rounded-lg w-1/6 text-xl text-center"
        ></input><br />
        <button className={`${buttonTypes.hoverable} w-16`}>Login</button> */}
        {/* if already logged in, show user */}
        {/* add logout */}
        {session ?
          <div className="flex flex-col items-center justify-center">
            {/* could add image from session.user.image */}
            <p className="text-2xl">Signed in as {session?.user?.email}.</p>
            <GoogleSignOut/>
          </div> 
          : 
          <GoogleSignIn />
        }
      </div>
    </main>
  );
}
