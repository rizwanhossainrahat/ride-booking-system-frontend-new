import Logo from "@/assets/icons/Logo";
import LogoSVG from "../assets/icons/Logo.svg"
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-center">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:flex justify-center items-center w-full h-full">
        <img
          src={LogoSVG}
          alt="Image"
          className="w-[400px] h-auto dark:brightness-[0.8]"
        />
      </div>
    </div>
    </>
  );
}