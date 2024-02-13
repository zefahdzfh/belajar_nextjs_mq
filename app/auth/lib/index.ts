import { axiosClient } from "@/lib/axiosClient";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "../interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hook/useToast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const router = useRouter();

  //register

  const register = async (
    payload: RegisterPayload
  ): Promise<RegisterResponse> => {
    return axiosClient.post("/auth/register", payload).then((res) => res.data);
  };

  const useRegister = () => {
    const [errorValidation, setErrorValidation] = useState<string[]>([]);
    const handleTyping = (name: string) => {
      setErrorValidation((value) => {
        const filter = value.filter(
          (item: string) => item?.includes(name) === false
        );

        return filter;
      });
    };

    const handleShowError = (name: string) => {
      const message = errorValidation.find(
        (item: string) => (item: string) => item && item.startsWith(name)
      );
      return message;
    };

    const [serverErrors, setServerErrors] = useState<string[]>([]);
    const { mutate, isLoading } = useMutation({
      mutationFn: (payload: RegisterPayload) => register(payload),
      onSuccess: (res: { message: string }) => {
        toastSuccess(res.message);
      },
      onError: (err: any) => {
        console.log("error", err);

        if (err.response.status === 302) {
          return toastWarning(err.response.data.message);
        }

        if (err.response.status === 400) {
          setServerErrors(err.response.data.message);
          return toastWarning(err.response.data.message);
        }
        toastError();
      },
    });
    return {
      mutate,
      isLoading,
      serverErrors,
      setServerErrors,
      errorValidation,
      handleShowError,
      handleTyping,
    };
  };

  //login

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };

  const useLogin = () => {
    const { mutate, isLoading } = useMutation(
      (payload: LoginPayload) => login(payload),
      {
        onSuccess: async (response:any) => {
          toastSuccess(response.message);
          await signIn("credentials", {
            id: response.data.id,
            name: response.data.nama,
            email: response.data.email,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            redirect: false,
          });

          router.push("/admin");
        },

        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );
    return { mutate, isLoading };
  };

  //lupa pw

  //reset pw
  return { useRegister, useLogin };
};

export default useAuthModule;
