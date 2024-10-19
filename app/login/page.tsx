"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <p>Login</p>
      <button onClick={() => signIn("github")}>Githubログイン</button>
      <button onClick={() => signIn("google")}>Googleログイン</button>
    </div>
  );
}
