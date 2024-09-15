import { signIn, signOut } from "@/auth"
import { buttonTypes } from "@/app/ui/frequent"
 
export function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className={`${buttonTypes.hoverable} text-2xl w-56`}>Sign in with Google</button>
    </form>
  )
} 

export function GoogleSignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className={`${buttonTypes.hoverable} text-2xl w-32`}>Sign out</button>
    </form>
  )
} 