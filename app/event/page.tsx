"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Button from "../component/button";
import InputText from "../component/inputText";
import { ChangeEvent } from "react";

const Home = () => {
  let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0); // jika number , dengan data awal 0

  let [payload, setPayload] = useState({
    name: "",
    password: "",
    email : "",
    alamat : ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPayload(() => {
      return {
        ...payload,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <main className="space-y-5 p-10">
      {JSON.stringify(payload)}

      <InputText
        id="name"
        name="name"
        value={payload.name}
        onChange={handleChange}
      />
      <InputText
        id="password"
        name="password"
        value={payload.password}
        onChange={handleChange}
      />
       <InputText
        id="email"
        name="email"
        value={payload.email}
        onChange={(e)=> {
          handleChange(e)
        }}
      />
       <InputText
        id="alamat"
        name="alamat"
        value={payload.alamat}
        onChange={(e)=> {
          handleChange(e)
        }}
      />
    </main>
  );
};

export default Home;