"use client";
import { useEffect,useState } from "react"
import Button from "@/app/component/button";
import InputText from "@/app/component/inputText";

const BelajarHook=()=>{
    let [message,setMessage]=useState('useeffect belom jalan');
    let[count,setCount]=useState(0);
    let[text,setText]=useState(false);
    useEffect(() => {
        setCount((c) => c + 1)
        console.log('useEffect berjalan')
      },[message,text]);
    return(
        <section>
            <p>siap belajar hook {count}</p>
            <p>{text ? "sudah" : "belum"}</p>
            <div className="text-red-500 font-bold">{message}</div>
            <InputText
                value={message}
                onChange={(e)=>{
                    setMessage(e.target.value);
                }}
            />

            <Button
                title="tes"
                colorSchema="red"
                variant="solid"
                
            />
        </section>
        
    )
}

export default BelajarHook