"use client";
import Button from "../component/button";
import { Dispatch, SetStateAction } from "react";

interface cardProps {
  tanggal: number;
  bulan: string;
  setTanggal: Dispatch<SetStateAction<any>>;
  setBulan: Dispatch<SetStateAction<any>>;
}

const Card: React.FC<cardProps> = ({
  tanggal,
  bulan,
  setTanggal,
  setBulan,
}) => {
  return (
    <section >
      <div className="w-[200px] h-56 bg-white flex justify-between items-center flex-col border rounded-lg shadow-lg">
        <div className="bg-red-500 h-10 flex justify-center w-full rounded-t-lg font-semibold  text-white">
          {bulan}
        </div>
        <div className="text-black p-3 font-medium text-center text-9xl">
          {tanggal}
        </div>
        <Button
          title="clear"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setTanggal(0);
            setBulan("Agustus");
          }}
        />
      </div>
      
    </section>
  );
};

export default Card;
