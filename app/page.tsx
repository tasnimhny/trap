"use client";

import { useRouter } from "next/navigation";
import { abys } from "./fonts";


export default function Home() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/video")}
      className={abys.className}
      style={{
        backgroundColor: "#780606",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "#110702",
        fontSize: "8rem",
        userSelect: "none"
      }}
    >
      TRAP
    </div>
  );
}

