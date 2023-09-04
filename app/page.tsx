"use client";
import { json } from "stream/consumers";
import Button from "./component/button";
import InputText from "./component/inputText";
import Label from "./component/label";
import Note from "./component/note";
import { useState, useEffect } from "react";
import Tambah from "./tambah";
import Kurang from "./kurang";

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

type Nilai = {
  id?: number;
  mapel: "Kejuruan" | "Agama" | "Umum" | "";
  nilai: 70 | 80 | 90 | 100 | "";
};

const Home = () => {
  const [nilai, setNilai] = useState<Nilai[]>([
    {
      id: 1,
      mapel: "Kejuruan",
      nilai: 80,
    },
  ]);

  const [data, setData] = useState<Nilai>({
    mapel: "",
    nilai: "",
  });

  const [btnSave, setBtnSave] = useState(true);

  const [count, setCount] = useState(1);
  const getLastIndex = () => {
    setCount((prev) => prev + 1);
    return count + 1;
  };

  useEffect(() => {
    if (data.mapel != "" && data.nilai != "") {
      setBtnSave(false);
    }
  }, [data]);

  return (
    <main>
      {/* {JSON.stringify(data)} */}
      <section className="p-2">
        {nilai.map((n, i) => (
          <div key={i} className="p-2 border-2 rounded shadow-md leading-relaxed">
            <h1>id: {n.id}</h1>
            <h1>Mata Pelajaran: {n.mapel}</h1>
            <h1>Nilai: {n.nilai}</h1>
            <Button 
            isDisabled={nilai.length<=1}
            disabled
              colorSchema='red'
              variant="solid"
              title='Delete'
              onClick={() => {
                setNilai((prev) => {
                  prev.pop();
                  return[...prev]
                })
                console.log(n.id);
              }}
            />
          </div>
        ))}
      </section>

      <section className="pl-2 py-5">
        <Button
          title="Kejuruan"
          colorSchema="blue"
          variant="solid"
          isDisabled={data.mapel === "Kejuruan"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mapel: "Kejuruan",
              };
            });
          }}
        />
        <Button
          title="Agama"
          colorSchema="blue"
          isDisabled={data.mapel === "Agama"}
          variant="outline"
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mapel: "Agama",
              };
            });
          }}
        ></Button>
        <Button
          title="Umum"
          colorSchema="blue"
          variant="solid"
          isDisabled={data.mapel === "Umum"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mapel: "Umum",
              };
            });
          }}
        />
      </section>

      <section className="pl-2 py-5">
        <Button
          title="70"
          colorSchema="green"
          variant="outline"
          isDisabled={data.nilai === 70}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: 70,
              };
            });
          }}
        />
        <Button
          title="80"
          colorSchema="green"
          variant="outline"
          isDisabled={data.nilai === 80}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: 80,
              };
            });
          }}
        />
        <Button
          title="90"
          colorSchema="green"
          variant="outline"
          isDisabled={data.nilai === 90}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: 90,
              };
            });
          }}
        />
        <Button
          title="100"
          colorSchema="green"
          variant="outline"
          isDisabled={data.nilai === 100}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: 100,
              };
            });
          }}
        />
      </section>
      <section className="pl-2 py-5">
          <Button 
          title="Simpan"
          colorSchema="green"
          variant="solid"
          isDisabled={btnSave}
          disabled={btnSave}
          onClick={()=>{
            setNilai((prev)=>[
              ...prev,
              {
                id:getLastIndex(),
                mapel:data.mapel,
                nilai:data.nilai
              }
            ])
            setData((prev)=>{
              return{
                ...prev,
                mapel:'',
                nilai:''
              }
            })
            setBtnSave(true)
          }}
           />
      </section>
    </main>
  );

  // let [message, setMessage] = useState("hello"); // jika string, dengan data awal "hai"
  // let [count, setCount] = useState(0);
  // let [isLogin, setIsLogin] = useState(false);
  // let [profile, setProfile] = useState<Identitas>({
  //   nama: "Zefa",
  //   sekolah: "smk mq",
  //   umur: 16,
  // }); //object

  // let bilangan = [1,2,3,4,5,6,7,8];

  // let [hasil, setHasil] = useState<Hasil[]>([
  //   {
  //     mata_pelajaran: "matematika",
  //     nilai: 80,
  //   },

  // ]); // jika sebuah array

  // return (
  //   <main className="space-y-5 ">

  //     {hasil.map((item, index)=>(
  //       <section key={index}>
  //         <h5>Nama Mata Pelajaran : {hasil[index].mata_pelajaran}</h5>
  //         <h5>Nilai : {item.nilai}</h5>
  //       </section>
  //     ))}
  //     <Button
  //         width="full"
  //         title="Tambah"
  //         colorSchema="red"
  //         variant="solid"
  //         onClick={() => {
  //           setHasil((prevState) => {
  //             return [...prevState,{mata_pelajaran:"Fisika", nilai:100}]
  //           });
  //         }}
  //       ></Button>

  //     {bilangan.map((item, index)=>(
  //       <h1 key={index}>{item}</h1>
  //     ))}

  //     <h1 className="text-red-500 font-bold text-2xl">
  //       Nama adalah {profile.nama}, Bersekolah di {profile.sekolah} dan berumur {" "}
  //       {profile.umur} dan rumah di {profile.alamat || "-"}
  //     </h1>

  //     <div className=" grid grid-cols-2 gap-5">
  //       <Button
  //         width="full"
  //         title="Tambah Alamat"
  //         colorSchema="red"
  //         variant="solid"
  //         onClick={() => {
  //           setProfile((prevProfile) => {
  //             return {
  //               ...prevProfile,
  //               nama: "Zefa",
  //               alamat: "Jakarta",
  //             };
  //           });
  //         }}
  //       ></Button>
  //       <Button
  //         width="full"
  //         title="Kembali ke default"
  //         colorSchema="blue"
  //         variant="solid"
  //         onClick={() => {
  //           setProfile((prevProfile) => {
  //             return {
  //               nama: "Zefa",
  //               sekolah: "smk mq",
  //               umur: 16,
  //             };
  //           });
  //         }}
  //       ></Button>
  //     </div>

  //     <h1 className="text-red-500 font-bold text-2xl">
  //       {isLogin ? "sudah login" : "belum login"}
  //     </h1>
  //     <Button
  //       title="Logout"
  //       colorSchema="red"
  //       variant="solid"
  //       onClick={() => {
  //         setIsLogin(false);
  //       }}
  //     ></Button>
  //     <Button
  //       title="Login"
  //       colorSchema="blue"
  //       variant="solid"
  //       onClick={() => {
  //         setIsLogin(true);
  //       }}
  //     ></Button>

  //     <h1 className="text-red-500 font-bold text-2xl">{count}</h1>
  //     <Button
  //       title="Tambah"
  //       colorSchema="red"
  //       variant="solid"
  //       onClick={() => {
  //         setCount((prevCount) => prevCount + 1);
  //       }}
  //     ></Button>
  //     <Button
  //       isDisabled={count === 0 ? true : false}
  //       title="kurang"
  //       colorSchema="blue"
  //       variant="solid"
  //       onClick={() => {
  //         setCount((prevCount) => prevCount - 1);
  //       }}
  //     ></Button>

  //     <h1 className="text-red-500 font-bold text-2xl">{message}</h1>
  //     <Button
  //       title="Zefa"
  //       colorSchema="red"
  //       variant="solid"
  //       onClick={() => {
  //         setMessage("Hello Zefa");
  //       }}
  //     ></Button>
  //     <Button
  //       title="Hilmi"
  //       colorSchema="blue"
  //       variant="solid"
  //       onClick={() => {
  //         setMessage("Hello Hilmi");
  //       }}
  //     ></Button>
  //   </main>
  // );
};

// export default Home;

const App = () => {
  let [count,setCount]= useState(0)
  return(
    <>
      <h1 className="text-lg">{count}</h1>
      <section>
        <Tambah count={count} setCount={setCount} />
        <Kurang count={count} setCount={setCount} />
        
      </section>
    </>
  )
}
export default App