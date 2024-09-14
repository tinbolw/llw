import { buttonTypes } from "@/app/ui/frequent";
import GoogleSignIn from "@/app/ui/google-signin";

export default function Login() {
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="md:text-3xl text-center">Login</h1>
        <p className="text-center">
          Unless you have authentication, there is nothing to see here.
        </p><br />
      </div>
      <div className="flex flex-col items-center justify-center">
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
        <GoogleSignIn/>
      </div>
    </main>
  );
}
