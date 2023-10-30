import LoginButton from "@/3rd/next-auth/components/LoginButton"
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
    (
      <>
        <LoginButton></LoginButton>
      </>
    )
  )
}
