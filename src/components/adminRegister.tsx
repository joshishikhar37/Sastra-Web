"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AdminRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push("/adminHome");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-[100%]">
      <div className="shadow-lg h-[50%] px-[10%]  border-t-4 border-blue-400 rounded-xl bg-sky-100/80">
        <h1 className="text-3xl font-bold my-4 flex justify-center ">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className=" w-80 py-[3%] px-[2%] mb-[2%] rounded-xl"  
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            className=" w-80 py-[3%] px-[2%] mb-[2%] rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className=" w-80 py-[3%] px-[2%] mb-[2%] rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold cursor-pointer px-[5%] py-2 rounded-xl">
            <Link href="/admin/adminHome">Register</Link>
          </button>

          {error && (
            <div className="bg-red-500  text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/admin"}>
            Already have an account?{" "}
            <span className="underline text-blue-600 hover:scale-110">
              Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;