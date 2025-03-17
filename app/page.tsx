import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { FaUnlock } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center  bg-gradient-to-bl from-violet-500 to-fuchsia-500">
      <div className="space-y-5 text-center">
        <h1 className="flex h-full text-white items-center justify-center font-semibold text-7xl gap-4">
          <FaUnlock />
          Auth
        </h1>
        <p className="text-white text-lg">A Simple Auth Service</p>
      </div>
      <div className="mt-5">
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
