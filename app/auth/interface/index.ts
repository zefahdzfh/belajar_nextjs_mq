import { BaseResponsePagination, BaseResponseSuccess } from "@/lib/axiosClient";

interface User {
    id? : number;
    nama: string;
    email: string;
    password:string;
}

export interface LoginPayload extends Pick<User, "email" | "password"> {}

export interface RegisterPayload
extends Pick<User, "nama" | "email" | "password"> {}

export interface RegisterResponse extends BaseResponsePagination {}

export interface LoginResponse extends BaseResponseSuccess {
    data: User;
  }