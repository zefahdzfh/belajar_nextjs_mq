// frontend/interfaces/Produk.ts

import { BaseResponsePagination } from "@/lib/axiosClient";

export enum KategoriProduk {
  Handphone = 'handphone',
  Laptop = 'laptop',
  Mobil = 'mobil',
  Motor = 'motor',
}

export interface Produk {
  id: number;
  nama_produk: string;
  kategori_produk: KategoriProduk;
  harga_produk: number;
  jumlah_produk: number;
  deskripsi_produk: string;
  tahun_pembuatan: number;
  created_at: string;
  updated_at: string;
}

export interface ProdukListResponse extends BaseResponsePagination {
  data: Produk[];
}
