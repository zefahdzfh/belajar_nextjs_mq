"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/app/component/button";
import { useClosure } from "@/hook";
import InputText from "@/app/component/inputText";
import useDebounce from "@/hook/useDebounce";

const Home = () => {
  const { isOpen, onOpen, onClose } = useClosure();
  let [keyword, setKeyword] = useState("");
  let {debouncedValue}=useDebounce(keyword,500)
  
  return (
    <section className="h-screen w-screen space-y-5">
      <Button
        onClick={onOpen}
        colorSchema="blue"
        variant="solid"
        title="open"
      />
      <Button
        onClick={onClose}
        colorSchema="red"
        variant="solid"
        title="closed"
      />
      <InputText
        value={keyword}
        placeholder="nama"
        onChange={(e)=>{
          setKeyword(e.target.value)
        }}
        
      />

      debouncedValue={debouncedValue}

      {isOpen ? <p>Open</p> : <p>Close</p>}
    </section>
  );
};

export default Home;
