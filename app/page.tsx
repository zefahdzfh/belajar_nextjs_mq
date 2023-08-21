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
  alamat?: string;
};

type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [message, setMessage] = useState("hello"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0);
  let [isLogin, setIsLogin] = useState(false);
  let [profile, setProfile] = useState<Identitas>({
    nama: "Zefa",
    sekolah: "smk mq",
    umur: 16,
  }); //object

  let bilangan = [1,2,3,4,5,6,7,8];

  let [hasil, setHasil] = useState<Hasil[]>([
    {
      mata_pelajaran: "matematika",
      nilai: 80,
    },
    
  ]); // jika sebuah array


  return (
    <main className="space-y-5 ">
      {hasil.map((item, index)=>(
        <section key={index}>
          <h5>Nama Mata Pelajaran : {hasil[index].mata_pelajaran}</h5>
          <h5>Nilai : {item.nilai}</h5>
        </section>
      ))}
      <Button
          width="full"
          title="Tambah"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setHasil((prevState) => {
              return [...prevState,{mata_pelajaran:"Fisika", nilai:100}]
            });
          }}
        ></Button>

      {bilangan.map((item, index)=>(
        <h1 key={index}>{item}</h1>
      ))}


      <h1 className="text-red-500 font-bold text-2xl">
        Nama adalah {profile.nama}, Bersekolah di {profile.sekolah} dan berumur {" "}
        {profile.umur} dan rumah di {profile.alamat || "-"}
      </h1>

      <div className=" grid grid-cols-2 gap-5">
        <Button
          width="full"
          title="Tambah Alamat"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                nama: "Zefa",
                alamat: "Jakarta",
              };
            });
          }}
        ></Button>
        <Button
          width="full"
          title="Kembali ke default"
          colorSchema="blue"
          variant="solid"
          onClick={() => {
            setProfile((prevProfile) => {
              return {
                nama: "Zefa",
                sekolah: "smk mq",
                umur: 16,
              };
            });
          }}
        ></Button>
      </div>

      

      <h1 className="text-red-500 font-bold text-2xl">
        {isLogin ? "sudah login" : "belum login"}
      </h1>
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
          setMessage("Hello Zefa");
        }}
      ></Button>
      <Button
        title="Hilmi"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setMessage("Hello Hilmi");
        }}
      ></Button>
    </main>
  );
};

export default Home;
