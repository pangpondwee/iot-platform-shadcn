import SignInForm from "./_components/sign-in-form";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="flex h-screen flex-1 items-center justify-center">
      <div className="m-4 flex max-w-md flex-1 flex-col items-center gap-6">
        <Logo />
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <SignInForm />
      </div>
    </main>
  );
}
