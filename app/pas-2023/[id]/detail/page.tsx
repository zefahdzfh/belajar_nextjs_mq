// pages/[id]/detail/page.tsx
"use client"; 

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  nama_produk: string;
  kategori_produk: string;
  harga_produk: number;
  jumlah_produk: number;
  deskripsi_produk: string;
  tahun_pembuatan: number;
  created_at: string;
  updated_at: string;
  // Add other properties if needed
}

const ProductDetail = () => {
  const router = useRouter();
  const { id: defaultId } = router.query as { id: string }; // Destructuring id from router.query
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (defaultId) {
          const response = await axios.get(`/pas-2023/${defaultId}/detail`);
          setProduct(response.data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        // Menampilkan pesan error kepada pengguna
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [defaultId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <h1>{product.nama_produk}</h1>
          <p>Kategori: {product.kategori_produk}</p>
          <p>Harga: {product.harga_produk}</p>
          <p>Jumlah: {product.jumlah_produk}</p>
          <p>Deskripsi: {product.deskripsi_produk}</p>
          <p>Tahun Pembuatan: {product.tahun_pembuatan}</p>
          <p>Created At: {product.created_at}</p>
          <p>Updated At: {product.updated_at}</p>
          {/* Add other details as needed */}
        </>
      ) : (
        <p>Product not found or invalid ID</p>
      )}
    </div>
  );
};

export default ProductDetail;
