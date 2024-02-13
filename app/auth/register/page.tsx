"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import { useFormik, Form, FormikProvider, getIn } from "formik";
import * as yup from "yup";
import useAuthModule from "../lib";
import { RegisterPayload } from "../interface";
import { useState } from "react";

export const registerSchema = yup.object().shape({
  nama: yup.string().nullable().default("").required("Wajib isi"),
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakater"),
});

const Register = () => {
  const { useRegister } = useAuthModule();
  const { isLoading, mutate, serverErrors, setServerErrors,errorValidation,handleShowError,handleTyping } = useRegister();
  const formik = useFormik<RegisterPayload>({
    initialValues: registerSchema.getDefault(),
    validationSchema: registerSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      setServerErrors([]);
      mutate(payload);
    },
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
  } = formik;
  return (
    <section className="p-20">
      <h1 className="font-bold text-xl text-center">Register</h1>
      error: {JSON.stringify(errors)}
      <br />
      values:{JSON.stringify(values)}
      <FormikProvider value={formik}>
        <Form className="space-y-5" action="">
          <section>
            <Label htmlFor="nama" title="Nama" />
            <InputText
              value={values.nama}
              onChange={handleChange}
              placeholder="Isi Nama Anda"
              id="nama"
              name="nama"
              isError={getIn(errors, "nama")}
              messageError={errors?.nama}
            />
          </section>
          <section>
            <Label htmlFor="email" title="Email" />
            <InputText
              value={values.email}
              onChange={handleChange}
              placeholder="Isi Email Anda"
              id="email"
              name="email"
              isError={getIn(errors, "email") 
              }
              messageError={errors?.email}

            />
          </section>
          <section>
            <Label htmlFor="password" title="Password" />
            <InputText
              value={values.password}
              type="password"
              onChange={handleChange}
              placeholder="Isi Password Anda"
              id="password"
              name="password"
              isError={
                (serverErrors && serverErrors.length > 0) ||
                getIn(errors, "password")
              }
              messageError={
                serverErrors && serverErrors.length > 0
                  ? serverErrors.join(", ")
                  : errors?.password
              }
            />
          </section>
          <section>
            <Button
              isLoading={isLoading}
              isDisabled={isLoading}
              height="lg"
              title="Register"
              colorSchema="blue"
            />
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default Register;
