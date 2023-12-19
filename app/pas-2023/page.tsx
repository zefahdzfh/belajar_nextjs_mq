// frontend/pages/products.js
"use client";

import useProductModule from "./lib";
import Button from "@/components/Button";
import { Table, Th, Thead, Tr, Tbody, Td } from "../../components/Tabel";
import { Pagination } from "@/components/Pagination";
import { Drawer } from "@/components/Drawer";
import { useClosure } from "@/hook";
import ProductCard from "./components/card";

const Products = () => {
  const { useProductList } = useProductModule();
  const { data, isFetching } = useProductList();

  return (
    <>
      <section className="flex md:flex-row flex-col m-2 p-2 h-screen gap-4">
        <div className="px-2 m-24">
          <h1 className="text-xl font-semibold">Hello</h1>
          <h2 className="text-lg">My name is</h2>
          <h1 className="text-3xl font-semibold">Hudzaifah ibnu Puase</h1>
          <h2 className="text-lg mt-32">I am Junior developer currently studying at SMK Madinatul Quran on Software Development </h2>
        </div>
        <div className="w-1/2 mt-10 ml-5">
          <img className="w-[700px]"
            src="https://blog.tripcetera.com/id/wp-content/uploads/2020/10/pulau-padar.jpg" alt=""
          />
        </div>
      </section>
      <section className="container px-4 mx-auto">
      <h1 className="text-3xl font-semibold">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {data?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
