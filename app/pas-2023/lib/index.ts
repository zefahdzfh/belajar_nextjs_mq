import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { ProdukListResponse } from "../interface";

const useProductModule = () => {
  const getProductList = async (): Promise<ProdukListResponse> => {
    return axiosClient.get("/produk/list").then((res) => res.data);
  };

  const useProductList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/produk/list"],
      () => getProductList(),
      {
        keepPreviousData: true,
        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  return { useProductList };
};

export default useProductModule;