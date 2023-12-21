export interface Category {
  id: number;
  name:string;
  img:string;
}

export interface CategoryListResponse {
  data: Category[];
}

export interface Dish{
  name:string;
  harga:number;
  waktu:string;
  jumlah:number
  rating:string;
  image:string;
  pesan:number;
}

export interface DishiListResponse{
  data: Dish[];
}

interface Pesanan {
  foto:string;
  nama: string;
  jumlah: number;
  harga: number;
}