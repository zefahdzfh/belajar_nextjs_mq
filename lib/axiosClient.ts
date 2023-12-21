import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://belajar-react.smkmadinatulquran.sch.id/api",
  headers: { "Content-Type": "application/json" },
});
