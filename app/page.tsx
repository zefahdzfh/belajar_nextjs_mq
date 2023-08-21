"use client";
import Button from "./component/button";
import InputText from "./component/inputText";
import Label from "./component/label";
import Note from "./component/note";
import { useState } from "react";

type Identitas = {
  nama: string;
  sekolah: string;
  umur: number | null;
  alamat?:string;
};


const Home = () => {
  let [message, setMessage] = useState("hello"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0);
  let [isLogin,setIsLogin] = useState(false);
  let [profile, setProfile] = useState<Identitas>({
    nama:"Zefa",
    sekolah:"smk mq",
    umur:16
  }) //object

  return (
    <main className="space-y-5">
      <h1 className="text-red-500 font-bold text-2xl">{isLogin? "sudah login":"belum login"}</h1>
      <Button
        title="Logout"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setIsLogin(false);
        }}
      ></Button>
      <Button
        title="Login"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setIsLogin(true);
        }}
      ></Button>

      <h1 className="text-red-500 font-bold text-2xl">{count}</h1>
      <Button
        title="Tambah"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      ></Button>
      <Button
        isDisabled={count === 0 ? true : false}
        title="kurang"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      ></Button>

<h1 className="text-red-500 font-bold text-2xl">{message}</h1>
      <Button
        title="Zefa"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setMessage('Hello Zefa');
        }}
      ></Button>
      <Button
        title="Hilmi"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setMessage('Hello Hilmi');
        }}
      ></Button>
      
    </main>
  );
};

export default Home;
