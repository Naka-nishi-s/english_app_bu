"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleGithubLogin = () => {
    signIn("github", { callbackUrl: "/nice" });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/nice" });
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={() => signIn("github")}>旧Githubログイン</button>
      <button onClick={handleGithubLogin}>Githubログイン</button>
      <button onClick={handleGoogleLogin}>Googleログイン</button>
    </div>
  );
}
