'use client'

import { ButtonHTMLAttributes, FC, useState } from "react"
import Button from "./ui/Button"
import toast from "react-hot-toast"
import { signOut } from "next-auth/react"
import { Loader2, LogOut } from "lucide-react"

const SignOutButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await signOut()
    } catch {
      toast.error('There was a problem signing out.')
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <Button {...props} variant='ghost' onClick={handleSignOut}>
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  )
}

export default SignOutButton
