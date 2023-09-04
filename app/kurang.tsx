"use client";
import { Dispatch, SetStateAction } from "react";
import Button from "./component/button";

interface KurangProps {
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

const Kurang: React.FC<KurangProps> = ({ count, setCount }) => {
  return (
    <section className="border shadow-lg">
      <Button
        onClick={() => {
          setCount((c: number) => c - 1);
        }}
        colorSchema="blue"
        title="Kurang"
      ></Button>
    </section>
  );
};

export default Kurang;
