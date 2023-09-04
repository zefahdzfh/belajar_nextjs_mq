"use client";
import { Dispatch, SetStateAction } from "react";
import Button from "./component/button";

interface TambahProps {
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

const Tambah: React.FC<TambahProps> = ({ count, setCount }) => {
  return (
    <section className="border shadow-lg">
      <Button
        onClick={() => {
          setCount((c: number) => c + 1);
        }}
        colorSchema="blue"
        title="Tambah"
      ></Button>
    </section>
  );
};

export default Tambah;
