/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import useCategoryModule from "./lib";
import { Dish } from "./interface";
import PopUpModal from "./components/popup";

const Mykantin = () => {
  const popupClosed = null;

  const { useDishList, useCategoryList } = useCategoryModule();
  const { data: DishList } = useDishList();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPopuler, setSelectedPopuler] = useState<Dish | null>(null);

  const handleClickPopuler = (populer: Dish) => {
    setSelectedPopuler(populer);
  };

  const handleClose = () => {
    setSelectedPopuler(null);
  };

  const { data: categorylist } = useCategoryList();
  useEffect(() => {}, [categorylist, DishList]);
  const selectPopuler = DishList.filter((populer) => {
    if (selectedCategory === "masakan") {
      return (
        !populer.name.toLowerCase().startsWith("juz") &&
        !populer.name.toLowerCase().startsWith("pizza")
      );
    } else if (selectedCategory) {
      return populer.name
        .toLowerCase()
        .includes(selectedCategory.toLowerCase());
    } else {
      return true;
    }
  });

  const [pesananList, setPesananList] = useState<Pesanan[]>([]);

  const tambahPesanan = (populer: Dish, jumlah: number) => {
    const pesanan: Pesanan = {
      foto:populer.image,
      nama: populer.name,
      jumlah: jumlah,
      harga: populer.harga * jumlah,
    };

    setPesananList((prev) => [...prev, pesanan]);

    console.log("Pesanan ditambahkan:", pesanan);
  };

  const hitungTotalHarga = () => {
    return pesananList.reduce((total, pesanan) => total + pesanan.harga, 0);
  };
  

  return (
    <>
      <section className="">
        <div className="flex">
          <div className="flex flex-col">
            <header className="w-full fixed bg-white z-30 h-[4rem]">
              <div className="flex items-center gap-[20rem] p-2">
                <img
                  className="w-[200px]"
                  src="https://media.discordapp.net/attachments/1015859296812146689/1186864664404041898/logo_1.png?ex=6594ccda&is=658257da&hm=683309de05b2b85db3832de1b824d5963b40d7835b7695f35d256a0cf0fc1a0f&=&format=webp&quality=lossless"
                  alt=""
                />
                <div className="w-[400px] relative h-[30px] rounded-lg bg-slate-100">
                  <input
                    className="w-full h-full rounded-lg bg-slate-100 ml-7"
                    type="text"
                    placeholder="Cari Makan Bang?"
                  />

                  <img
                    className="w-[15px] absolute top-2.5 left-2"
                    src="https://cdn.discordapp.com/attachments/1015859296812146689/1186864665599430666/Vector_2.png?ex=6594ccdb&is=658257db&hm=79fc40321c164d4f9b41078e75fd544a9e11a4be8824226c850bb7ba2b257151&"
                    alt=""
                  />
                </div>
              </div>
            </header>
            <main className="w-full pt-32 h-auto pl-10">
              <section className="flex flex-col max-w-[66rem] p-4 mx-auto">
                <div className="w-full bg-cover ">
                  <img
                    className="rounded-3xl"
                    src="https://media.discordapp.net/attachments/1015859296812146689/1186859856561459251/image.png?ex=6594c860&is=65825360&hm=ab40ecc542e2f721f8fea9ca30b494ad711e16abf4d37fc70c012c226c2a00e7&=&format=webp&quality=lossless&width=904&height=148"
                    alt=""
                  />
                </div>
                <div className="flex gap-3 py-5 px-[550px]">
                  <div className="bg-orange-500 h-3 w-3 rounded-xl"></div>
                  <div className="bg-slate-200 h-3 w-3 rounded-xl"></div>
                  <div className="bg-slate-200 h-3 w-3 rounded-xl"></div>
                  <div className="bg-slate-200 h-3 w-3 rounded-xl"></div>
                  <div className="bg-slate-200 h-3 w-3 rounded-xl"></div>
                </div>
                <div className="flex flex-row justify-between mt-10">
                  <h1 className="text-4xl font-semibold text-[#414141]">
                    Kategori
                  </h1>
                  <button className="w-[165px] h-[43px] rounded-3xl bg-[#FB6D3A] justify-center items-center text-center flex">
                    <p className="text-sm text-white font-medium">
                      Lebih Lengkap
                    </p>
                  </button>
                </div>
                <div className="flex flex-row gap-4 mt-5">
                  <button
                    // key={category.id}
                    onClick={() => setSelectedCategory(null)}
                    className="relative"
                  >
                    <img
                      className="w-[300px] h-[150px] rounded-2xl brightness-50"
                      src="https://s3-alpha-sig.figma.com/img/eba9/51e4/4f680d9f21103e3219a26cb8cc22ae9b?Expires=1704067200&Signature=aBe0Pa~TURsKM7MaHf9fXgXyP-rOV~FDyeM2UDelWKcvjHioPWlKt9BEns0n7idkKWkxHPv62RvyaTZMwz4a1I8cj4krZqrZW6U8cZ6tzEB2aqce~uRhdJdXnDiXygf4r3~FUIegSDGvfbDxmcZEQhqlRVgTu0dTV3AxuGhDGix9kAGpT3x7nRp4EFcHFB41TS0fmLUisCvhZqic9k7mvYu4ntLjhRSL7Xvp8IqToTxPmXbahPPfYCWawQmiCP5qjPlxgJ7PLxCPtZHnNISRbccwyYPInG5haHDnyOxh6nUuRiILkD79IL-1t8qWwsbJcerIyLCD4WrjBDbRIY7OSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <h1 className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white">
                      Semua
                    </h1>
                  </button>
                  {categorylist.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className="relative"
                    >
                      <img
                        className={
                          "w-[300px] h-[150px] rounded-2xl brightness-50"
                        }
                        src={category.img}
                        alt=""
                      />
                      <h1 className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white">
                        {category.name}
                      </h1>
                    </button>
                  ))}
                </div>

                <div className="flex flex-row justify-between mt-10">
                  <div>
                    <h1 className="text-4xl font-semibold text-[#414141]">
                      Populer
                    </h1>
                    <div className="grid grid-cols-3 gap-5">
                      {selectPopuler?.map((populer, indexing) => (
                        <div
                          key={indexing}
                          className="flex flex-col gap-4 mt-5 w-[330px]"
                        >
                          <button
                            onClick={() => {
                              handleClickPopuler(populer);
                            }}
                            className="relative flex flex-col"
                          >
                            <img
                              className="w-full h-[172px] rounded-2xl object-cover"
                              src={populer.image}
                              alt=""
                            />
                            <div className="absolute rounded-full left-14 top-36 -translate-x-1/2 -translate-y-1/2 font-semibold bg-white text-black text-center">
                              <h1 className="p-2">{populer.waktu}</h1>
                            </div>
                            <h1 className="text-3xl font-semibold text-[#414141] mt-2">
                              {populer.name}
                            </h1>
                            <div className="flex flex-row mt-3 gap-3">
                              <img
                                className="w-[25px] h-[25px]"
                                src="https://cdn.discordapp.com/attachments/1015859296812146689/1186887054769016884/Vector_3.png?ex=6594e1b5&is=65826cb5&hm=0fc0d315da3c45faadfbd43c75f22d34caf385cb3c7c02cd5e0228d85d627fb0&"
                                alt=""
                              />
                              <h1 className="text-2xl font-medium text-[#414141]">
                                {populer.rating}
                              </h1>
                              <h1 className="text-2xl font-medium text-[#414141] ml-7">
                                Rp {populer.harga}
                              </h1>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                    {/* Render modal pop-up jika populer yang dipilih tidak null */}
                    {selectedPopuler && (
                      <div className="fixed backdrop-blur w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="absolute top-32 left-52 ">
                          <button
                            className="absolute top-1 left-3  w-[30px] rounded-full bg-red-500"
                            onClick={() => handleClose()}
                          >
                            <h1 className=" p-1 text-center text-white font-semibold">
                              X
                            </h1>
                          </button>
                          {/* <button>close</button> */}
                          <PopUpModal
                            populer={selectedPopuler}
                            onPesan={(jumlah) => {
                              tambahPesanan(selectedPopuler, jumlah);
                              handleClose();
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[700px] h-[500px] p-5 flex flex-col bg-white rounded-lg gap-5 shadow-xl">
                  <img
                    className="w-full h-1/2 object-cover rounded-lg"
                    src="https://belajar-react.smkmadinatulquran.sch.id/image/pizza1.jpg"
                    alt=""
                  />

                  <div className="flex flex-row justify-between">
                    <h1 className="text-4xl font-semibold text-[#414141]">
                      Sate Ayam
                    </h1>
                    <h1 className="text-4xl font-medium text-[#414141]">
                      Rp 35.0000
                    </h1>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="rounded-full w-[100px]  font-semibold bg-white text-black text-center">
                      <h1 className="p-2">25-30 min</h1>
                    </div>
                    <div className="rounded-full w-[100px]  font-semibold bg-white text-black text-center">
                      <div className="flex flex-row p-2 justify-center items-center text-center">
                        <img
                          className="w-[25px] h-[25px]"
                          src="https://cdn.discordapp.com/attachments/1015859296812146689/1186887054769016884/Vector_3.png?ex=6594e1b5&is=65826cb5&hm=0fc0d315da3c45faadfbd43c75f22d34caf385cb3c7c02cd5e0228d85d627fb0&"
                          alt=""
                        />
                        <h1 className="">4.9</h1>
                      </div>
                    </div>
                    <div className="rounded-full w-[12  0px]  font-semibold bg-white text-black text-center">
                      <h1 className="p-2">Stok : 100</h1>
                    </div>
                  </div>

                  <div className="bg-slate-100 w-[200px] h-[50px] flex flex-row ">
                    <div className="bg-orange-200 flex justify-center items-center w-1/3">
                      <img
                        className="w-[20px]"
                        src="https://cdn.discordapp.com/attachments/1015859296812146689/1187029077832507445/Vector_5.png?ex=659565fa&is=6582f0fa&hm=4d8fb9a134e58eafe2e7e6b0cc7df63145c0dc341010377b15476277958fb590&"
                        alt=""
                      />
                    </div>
                    <div className=" flex justify-center items-center w-1/3">
                      <h1>0</h1>
                    </div>
                    <div className="bg-orange-200 flex justify-center items-center w-1/3">
                      <img
                        className="w-[20px]"
                        src="https://cdn.discordapp.com/attachments/1015859296812146689/1187029078109335583/Vector_6.png?ex=659565fa&is=6582f0fa&hm=961685672188a2140725d44e059b9846e2183e2ccc141fb9f9a35f472321474c&"
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="w-full h-[43px] rounded-3xl bg-[#FB6D3A] justify-center items-center text-center flex">
                    <p className="text-sm text-white font-medium">Pesan</p>
                  </button>
                </div>
                <div className="mt-52"></div>
              </section>
            </main>
          </div>
          <aside className="bg-[#FCFCFCE5] z-50 backdrop-blur-2xl h-screen fixed right-0 w-[400px]">
            <div className="flex justify-center items-center gap-8 py-4">
              <img
                className="w-[25px]"
                src="https://cdn.discordapp.com/attachments/1015859296812146689/1186864665075134586/Vector_1.png?ex=6594ccdb&is=658257db&hm=d90c976f48e69a14eb8bb3dac504e6bf59a49aba9a1c787bd95bc18e297e054a&"
                alt=""
              />
              <img
                className="w-[25px] "
                src="https://cdn.discordapp.com/attachments/1015859296812146689/1186864665356148746/Vector.png?ex=6594ccdb&is=658257db&hm=504ddac8704a2e4880e23d85457960413558ffa6c0981296a295a91561717bd9&"
                alt=""
              />
              <div className="w-[25px] bg-orange-400 rounded-full flex justify-center text-center">
                <p className="text-slate-800 text-base font-semibold">3</p>
              </div>
              <img
                className="w-[25px]"
                src="https://cdn.discordapp.com/attachments/1015859296812146689/1186864664693460992/Ellipse_1.png?ex=6594ccda&is=658257da&hm=f8a3cd0d76b7edbc4e983a52e9c0642588543a7568e134a2268ed3acb5395981&"
                alt=""
              />
            </div>
            <div className="flex justify-start items-start px-7 flex-col">
              <p className="text-3xl font-semibold text-[#414141] ">
                Pesanan Saya
              </p>

              <div className="bg-purple-600 h-[200px] w-[300px] mt-2 rounded-2xl">
                <div className="p-3  ">
                  <h1 className="text-white ">Hudzaifah Ibnu P</h1>
                  <h1 className="text-white text-3xl mt-10">Rp. 1.000.000,-</h1>
                  <h1 className="text-white text-lg mt-10">
                    3 7 5 8 * * * * * * * * * * 8 9 1 3
                  </h1>
                </div>
              </div>

              {pesananList.map((pesanan) => (
                <div
                  key={pesanan.id}
                  className="flex flex-row mt-5 justify-center items-center text-center gap-3"
                >
                  <img
                    className="w-[40px] h-[40px] rounded-2xl object-cover"
                    src={pesanan.foto}
                    alt=""
                  />
                  <h1 className="text-black text-lg font-medium">
                    {pesanan.jumlah}
                  </h1>
                  <h1 className="text-black text-lg font-medium">X</h1>
                  <h1 className="text-black text-lg font-medium">
                    {pesanan.nama}
                  </h1>
                  <h1 className="text-slate-400 text-lg font-medium">
                    Rp {pesanan.harga}
                  </h1>
                </div>
              ))}

              <div className="flex flex-row mt-5 justify-center items-center text-center gap-3">
                <img
                  className="w-[40px] h-[40px] rounded-2xl object-cover"
                  src="https://cdn.discordapp.com/attachments/1015859296812146689/1186916294235271188/image.png?ex=6594fcf0&is=658287f0&hm=5e260ff0c58461ab492d55ac6f46410e4d3d72b56eea4a9a53412f5fdcf48ca0&"
                  alt=""
                />
                <h1 className="text-black text-lg font-medium ">
                  Jl Jonggol Raya ...
                </h1>
                <h1 className="text-slate-400 text-lg font-medium ">Gratis</h1>
              </div>

              <div className="flex flex-row mt-5 justify-center items-center text-center gap-3">
  <h1 className="text-black text-base font-medium">Total:</h1>
  <h1 className="text-black text-3xl font-medium">Rp {hitungTotalHarga()}</h1>
</div>

              <button className="bg-orange-300 rounded-2xl flex justify-center w-full h-[50px] items-center text-center mt-3">
                <h1 className="text-black text-3xl font-semibold ">Pesan</h1>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Mykantin;
