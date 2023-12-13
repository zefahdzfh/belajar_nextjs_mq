import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import {
  BookCreateArrayPayload,
  BookCreatePayload,
  BookCreateResponse,
  BookDeleteArrayPayload,
  BookDetailResponse,
  BookListFilter,
  BookListResponse,
  BookUpdatePayload,
  BookUpdateResponse,
} from "../interface";
import { usePagination } from "@/hook/usePagination";
import CreateBook from "../tambah/page";
import Swal from "sweetalert2";
import { id } from "date-fns/locale";

const useBookModule = () => {
  const queryClient = useQueryClient();
  const defaultParams: BookListFilter = {
    title: "",
    author: "",
    from_year: "",
    to_year: "",
    page: 1,
    pageSize: 10,
  };
  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient.get("/book/list", { params }).then((res) => res.data);
  };
  const useBookList = () => {
    const {
      params,
      setParams,
      handleFilter,
      handleClear,
      handlePageSize,
      handlePage,
      filterParams,
    } = usePagination(defaultParams);

    const { data, isFetching, isLoading, isError } = useQuery(
      ["/book/list", [filterParams]],
      () => getBookList(filterParams),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return {
      data,
      isFetching,
      isLoading,
      isError,
      params,
      setParams,
      handlePageSize,
      handlePage,
      handleFilter,
      handleClear,
    };
  };

  const createBook = (
    payload: BookCreatePayload
  ): Promise<BookCreateResponse> => {
    return axiosClient.post(`/book/create`, payload).then((res) => res.data);
  };
  const useCreateBook = () => {
    const { isLoading, mutate } = useMutation(
      (payload: BookCreatePayload) => createBook(payload),
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (err) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      }
    );
    return { isLoading, mutate };
  };

  //update
  const updateBook = (
    payload: BookUpdatePayload,
    id: number
  ): Promise<BookUpdateResponse> => {
    return axiosClient
      .put(`/book/update/${id}`, payload)
      .then((res) => res.data);
  };
  const useUpdateBook = (id: number) => {
    const { isLoading, mutate } = useMutation(
      (payload: BookUpdatePayload) => updateBook(payload, id),
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (err) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      }
    );
    return { isLoading, mutate };
  };
  //update

  const getDetailBook = async (id: string): Promise<BookDetailResponse> => {
    return axiosClient.get(`/book/detail/${id}`).then((res) => res.data.data);
  };

  const useDetailBook = (id: string) => {
    const { data, isLoading, isFetching } = useQuery(
      ["/book/detail", { id }],
      () => getDetailBook(id),
      {
        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  const useDeleteBook = () => {
    const { mutate, isLoading } = useMutation(
      (id: number) => {
        return axiosClient.delete(`/book/delete/${id}`);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          queryClient.invalidateQueries(["/book/list"]);
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            Swal.fire({
              position: "top",
              icon: "warning",
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Ada Kesalahan",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        },
      }
    );

    return { mutate, isLoading };
  };
  const useCreateBulkBook = () => {
    const { mutate, isLoading } = useMutation(
      (payload: BookCreateArrayPayload) => {
        return axiosClient.post("/book/create/bulk", payload);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
        },
        onError: (error) => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1000,
          });
        },
      }
    );
    return { mutate, isLoading };
  };

  const useDeleteBulkBook = () => {
    const { mutate, isLoading } = useMutation(
      (payload: BookDeleteArrayPayload) => {
        return axiosClient.post("/book/delete/bulk", payload);
      },
      {
        onSuccess: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });

          queryClient.invalidateQueries(["/book/list"]);
        },
        onError: (error) => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1000,
          });
        },
      }
    );
    return { mutate, isLoading };
  };


  return {
    useBookList,
    useCreateBook,
    useDetailBook,
    useUpdateBook,
    useDeleteBook,
    useCreateBulkBook,
    useDeleteBulkBook
  };
};

export default useBookModule;
