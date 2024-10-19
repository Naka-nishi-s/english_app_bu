"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  return (
    <div>
      <p>ログイン後画面</p>
      <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "authenticated" && (
          <div>
            <p>認証完了!</p>
            <p>名前:{session.user?.name ?? "名前がありません"}</p>
            <p>
              メールアドレス:
              {session.user?.email ?? "メールアドレスがありません"}
            </p>
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt="イメージ画像"
                width={100}
                height={100}
              />
            ) : (
              <p>表示できる画像がありません</p>
            )}
            <p>画像:{session.user?.email ?? "メールアドレスがありません"}</p>
            <button onClick={() => signOut()}>ログアウト</button>
          </div>
        )}
        {status === "unauthenticated" && (
          <div>
            <p>認証されていません。認証してください。</p>
            <button onClick={() => signIn("github")}>Githubログイン</button>
            <button onClick={() => signIn("google")}>Googleログイン</button>
          </div>
        )}
      </div>
    </div>
  );
}
