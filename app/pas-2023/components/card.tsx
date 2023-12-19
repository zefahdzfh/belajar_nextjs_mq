/* eslint-disable @next/next/no-img-element */
// frontend/components/ProductCard.tsx

import React from "react";

// Tentukan tipe untuk properti product
interface ProductCardProps {
  product: {
    id: number;
    nama_produk: string;
    kategori_produk: string;
    harga_produk: number;
    jumlah_produk: number;
    deskripsi_produk: string;
    tahun_pembuatan: number;
    // tambahkan properti lain jika ada
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <a href={`/pas-2023/${product.id}/detail`}>
        <img
          src="https://img.ws.mms.shopee.co.id/4cedffb878145664153fb9da13749dde"
          alt={product.nama_produk}
          className="mb-4 rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">{product.nama_produk}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.kategori_produk}</p>

        <p className="text-sm text-gray-600 mb-2">
          Harga: {product.harga_produk}
        </p>
        {/* Tambahkan elemen lain sesuai kebutuhan */}
      </a>
    </div>
  );
};

export default ProductCard;
