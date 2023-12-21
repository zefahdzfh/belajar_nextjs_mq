import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { DishiListResponse, CategoryListResponse } from "../interface";

const useCategoryModule = () => {
  const getKategoriList = async (): Promise<CategoryListResponse> => {
    return axiosClient.get("/category/all").then((res) => res.data);
  };

  const useCategoryList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/category/all"],
      () => getKategoriList(),
      {
        keepPreviousData: true,
      } as UseQueryOptions<CategoryListResponse, unknown, CategoryListResponse>  // Perhatikan penggunaan UseQueryOptions
    );

    return { data: data?.data || [], isFetching, isLoading };
  };

  const getDishList = async (): Promise<DishiListResponse> => {
    return axiosClient.get("/populer/25").then((res) => res.data);
  };

  const useDishList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/populer/25"],
      () => getDishList(),
      {
        keepPreviousData: true,
      } as UseQueryOptions<DishiListResponse, unknown, DishiListResponse>  // Perhatikan penggunaan UseQueryOptions
    );

    return { data: data?.data || [], isFetching, isLoading };
  };

  return { useCategoryList, useDishList };
};

export default useCategoryModule;
