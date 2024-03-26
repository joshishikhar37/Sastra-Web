'use client'


import React, { useState } from "react";
import AdminNAV from "@/components/adminNAV";
import router from "next/router";

const AdminHomePage = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (res.ok) {
      const form = e.target;

      router.push("/");
    } else {
      console.log("User registration failed.");
    }
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-black" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminHomePage;
