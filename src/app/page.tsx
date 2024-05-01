"use client"
import Image from "next/image";

export default function Home() {

  const handleget = async () => {
    const res = await fetch("https://email-eight-bice.vercel.app/api/email");
    const data = await res.json();
    console.log(data);

  }

  const handlepush = async () => {
    const res = await fetch("https://email-eight-bice.vercel.app/api/email", {
      method: "POST",
      body: JSON.stringify({ email: "31cek" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      console.log("gönderildi");
    }
  };
  return (
    <div className="bg-black text-white">
      <button onClick={handleget}>tıkla</button>
      <button onClick={handlepush}>gönder</button>
    </div>
  );
}
