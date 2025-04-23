import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import SignupPage from "@/components/signup-form"
export default function SigninPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            <SignupPage />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
      <video
      src="/loginvid.mp4"
      autoPlay
      muted
      loop
      preload="none"
      className=" object-cover w-full h-full z-0"
    ></video>
      </div>
    </div>
  )
}
