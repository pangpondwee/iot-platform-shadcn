import Image from "next/image";
import SignInForm from "./_components/sign-in-form";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center h-screen">
      <div className="flex flex-1 flex-col items-center gap-6 m-4 max-w-md">
        <Image src={"/logo.svg"} width={142} height={32} alt="logo" />
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <SignInForm />
      </div>
    </main>
  );
}
