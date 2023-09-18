"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
  
import Card from "./card";
import Button from "../component/button";
import InputText from "../component/inputText";

export type Identitas = {
  nama: string;
  sekolah: string;
  umur: number | null;
};

export type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [tanggal, setTanggal] = useState(0);
  let [bulan, setBulan] = useState("Agustus");

  return (
    <main className="space-y-5 m-5">
      <h1>Latihan</h1>
      <Card
        bulan={bulan}
        tanggal={tanggal}
        setTanggal={setTanggal}
        setBulan={setBulan}
      />
      <Button
        onClick={() => {
          setTanggal((c) => c + 1);
        }}
        colorSchema="blue"
        variant="solid"
        title="tambah"
      />
      <Button
        onClick={() => {
          setTanggal((c) => c - 1);
        }}
        colorSchema="red"
        variant="solid"
        title="kurang"
      />
      <InputText
        id="bulan"
        name={"bulan"}
        value={bulan}
        onChange={(e) => {
          setBulan(e.target.value);
        }}
      />
    </main>
  );
};

export default Home;
