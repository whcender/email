"use client"
import Image from "next/image";

export default function Home() {

  const handleget = async () => {
    const res = await fetch("http://localhost:3000/api/email");
    const data = await res.json();
    console.log(data);

  }

  const handlepush = async () => {
    const res = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      body: JSON.stringify({ email: "asdasd" }),
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
