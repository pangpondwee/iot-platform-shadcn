import SignInForm from "./_components/sign-in-form";
import Logo from "@/app/_components/logo";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center h-screen">
      <div className="flex flex-1 flex-col items-center gap-6 m-4 max-w-md">
        <Logo />
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <SignInForm />
      </div>
    </main>
  );
}
