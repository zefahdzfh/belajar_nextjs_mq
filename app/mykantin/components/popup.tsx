/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Dish } from "../interface";

interface PopUpModalProps {
  populer: Dish;
  // onClose: () => void; // Tambahkan prop onClose
  onPesan: (jumlah: number) => void; // Menambahkan properti onPesan
}

const PopUpModal: React.FC<PopUpModalProps> = ({ populer, onPesan }) => {
  const [jumlah, setJumlah] = useState<number>(0);

  const kurangiJumlah = () => {
    if (jumlah > 0) {
      setJumlah((prev) => prev - 1);
    }
  };

  const tambahJumlah = () => {
    setJumlah((prev) => prev + 1);
  };

  const popupClosed = null

  
  return (
    <div>
      <div
        className="w-[700px] h-[500px] p-5 flex flex-col bg-white rounded-lg gap-5 shadow-xl"

      >
        {/* <button className="absolute top-1  w-[30px] rounded-full bg-red-500">
          <h1 className=" p-1 text-center text-white font-semibold">X</h1>
        </button> */}

        <img
          className="w-full h-1/2 object-cover rounded-lg"
          src={populer.image}
          alt=""
        />
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-semibold text-[#414141]">
            {populer.name}
          </h1>
          <h1 className="text-4xl font-medium text-[#414141]">
            Rp {populer.harga}
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <div className="rounded-full w-[100px]  font-semibold bg-white text-black text-center">
            <h1 className="p-2">{populer.waktu}</h1>
          </div>
          <div className="rounded-full w-[100px]  font-semibold bg-white text-black text-center">
            <div className="flex flex-row p-2 justify-center items-center text-center">
              <img
                className="w-[25px] h-[25px]"
                src="https://cdn.discordapp.com/attachments/1015859296812146689/1186887054769016884/Vector_3.png?ex=6594e1b5&is=65826cb5&hm=0fc0d315da3c45faadfbd43c75f22d34caf385cb3c7c02cd5e0228d85d627fb0&"
                alt=""
              />
              <h1 className="">{populer.rating}</h1>
            </div>
          </div>
          <div className="rounded-full w-[120px]  font-semibold bg-white text-black text-center">
            <h1 className="p-2">Stok:{populer.jumlah - jumlah}</h1>
          </div>
        </div>

        <div className="bg-slate-100 w-[200px] h-[50px] flex flex-row ">
          <button
            className="bg-orange-200 flex justify-center items-center w-1/3"
            onClick={kurangiJumlah}
          >
            <h1 className="font-normal text-3xl">-</h1>
          </button>
          <div className=" flex justify-center items-center w-1/3">
            <h1>{jumlah}</h1>
          </div>
          <button
            className="bg-orange-200 flex justify-center items-center w-1/3"
            onClick={tambahJumlah}
          >
            <h1 className="font-normal text-3xl">+</h1>
          </button>
        </div>
        <button className="w-full h-[43px] rounded-3xl bg-[#FB6D3A] justify-center items-center text-center flex" onClick={() => {
              onPesan(jumlah);
            }} >
          <p className="text-sm text-white font-medium">Pesan</p>
        </button>
      </div>
    </div>
  );
};

export default PopUpModal;
