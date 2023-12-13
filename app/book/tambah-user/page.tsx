"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import {
  useFormik,
  Form,
  FormikProvider,
  FieldArray,
  ArrayHelpers,
  getIn,
} from "formik";
import * as yup from "yup";
import { BookCreateArrayPayload } from "../interface";
import useBookModule from "../lib";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { createBookSchema } from "../tambah/page";
import { option } from "../tambah/page";
import { AddButton, DeleteButton } from "@/components/ButtonAction";

// const defaultCatatanArray = {
//   data: [
//     {
//       title: "",
//       author: "",
//       year: undefined,
//     },
//   ],
// };

interface Ujian {
  nilai: number | null;
  mapel: string;
}

interface tes {
  tes1: string;
  tes2: string;
}

interface CreateDefaultUser {
  nama: string;
  alamat: string;
  ujian: Ujian[];
  tes: tes;
}

const DefaultUser = {
  nama: "",
  alamat: "",
  ujian: [
    {
      nilai: null,
      mapel: "",
    },
  ],
  tes: {
    tes1: "",
    tes2: "",
  },
};

// const createBookArraySchema = yup
//   .object()
//   .shape({
//     data: yup.array().of(createBookSchema),
//   })
//   .default(defaultCatatanArray);

const ujianSchema = yup.object().shape({
  nilai: yup.number().nullable().required("Nilai Wajib Di Isi").default(null),
  mapel: yup.string().nullable().required("Mata Pelajaran Wajib Di Isi").default(""),
});

const createUser = yup
  .object()
  .shape({
    nama: yup
      .string()
      .default("")
      .nullable()
      .required("Nama Wajib diisi")
      .matches(
        /^[A-Z][a-zA-Z]{2,11}$/,
        "Nama harus mengandung setidaknya 1 huruf kapital, minimal 3 huruf, dan maksimal 12 huruf"
      ),
    alamat: yup.string().nullable().required().default(""),
    ujian: yup.array().of(ujianSchema),
    tes: yup.object().shape({
      tes1: yup.string().nullable().required().default(""),
      tes2: yup.string().nullable().required().default(""),
    }),
  })
  .default(DefaultUser);

// const createUser = yup
//   .object()
//   .shape({
//     data: yup.array().of(userSchema),
//   })
//   .default(DefaultUser);

const CreateUser = () => {
  const { useCreateBulkBook } = useBookModule();
  const { mutate, isLoading } = useCreateBulkBook();
  const onSubmit = async (values: CreateDefaultUser) => {
    console.log(values);
  };

  const formik = useFormik<CreateDefaultUser>({
    initialValues: createUser.getDefault(),
    validationSchema: createUser,
    enableReinitialize: true,
    onSubmit: onSubmit,
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
    touched,
  } = formik;

  return (
    <section className="flex items-center justify-center w-full h-full overflow-auto py-10">
      <section className="w-1/2">
        <Link href={"/book"}>
          <span className="flex items-center">
            {" "}
            <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
            Kembali
          </span>
        </Link>
        <h2 className="text-xl font-bold text-gray-500">Tambah Buku</h2>
        {JSON.stringify(values.ujian)}
        <FormikProvider value={formik}>
          <Form className="space-y-5" onSubmit={handleSubmit}>
            <section className="space-y-5 shadow-lg p-5 relative">
              <section>
                <Label htmlFor="nama" title="Nama" />
                <InputText
                  placeholder="Isi nama anda"
                  value={values.nama}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="nama"
                  name="nama"
                  isError={!!errors.nama}
                />
              </section>
              <section>
                <Label htmlFor="alamat" title="Alamat" />
                <InputText
                  placeholder="Isi alamat anda"
                  value={values.alamat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="alamat"
                  name="alamat"
                  isError={!!errors.alamat}
                />
              </section>

              <FieldArray
                name="ujian"
                render={(arrayHelpers: ArrayHelpers) => (
                  <>
                    {values &&
                      values.ujian.map((value, i) => (
                        <section
                          className="space-y-2 shadow-lg p-3 relative flex w-full flex-col justify-around items-center border border-black rounded"
                          key={i}
                        >
                          <section className="justify-start w-full flex relative">
                            <DeleteButton
                              onClick={() => {
                                if (values.ujian.length > 1) {
                                  arrayHelpers.remove(i);
                                }
                              }}
                            />
                          </section>

                          <section className="flex flex-row space-y-2 w-full justify-around items-center relative ">
                            <section>
                              <Label htmlFor="nilai" title="nilai" />
                              <InputText
                                value={value.nilai || undefined}
                                placeholder="Nilai"
                                id={`ujian[${i}]nilai`}
                                name={`ujian[${i}]nilai`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  getIn(errors?.ujian?.[i], "nilai") &&
                                  getIn(touched?.ujian?.[i], "nilai")
                                }
                                messageError={getIn(
                                  errors?.ujian?.[i],
                                  "nilai"
                                )}
                              />
                            </section>

                            <section>
                              <Label htmlFor="mapel" title="mapel" />
                              <InputText
                                value={value.mapel}
                                placeholder="Mapel"
                                id={`ujian[${i}]mapel`}
                                name={`ujian[${i}]mapel`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  getIn(errors?.ujian?.[i], "mapel") &&
                                  getIn(touched?.ujian?.[i], "mapel")
                                }
                                messageError={getIn(
                                  errors?.ujian?.[i],
                                  "mapel"
                                )}
                              />
                            </section>
                          </section>
                        </section>
                      ))}

                    <section className="w-full flex relative justify-center p-3 border border-blue-500 rounded">
                      <AddButton
                        onClick={() =>
                          arrayHelpers.push(ujianSchema.getDefault())
                        }
                      />
                    </section>
                  </>
                )}
              />
              <section className="space-y-2 shadow-lg p-3 relative flex w-full flex-col justify-around items-center border border-black rounded">
                <Label htmlFor="Tes" title="Tes"/>
                <section className="flex flex-row w-full justify-around">
                  <section>
                    <Label htmlFor="tes1" title="tes1" />
                    <InputText
                      placeholder="Isi tes1 anda"
                      value={values.tes.tes1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="tes1"
                      name="tes1"
                      isError={!!errors.tes?.tes1}
                    />
                  </section>

                  <section>
                    <Label htmlFor="tes2" title="tes2" />
                    <InputText
                      placeholder="Isi tes2 anda"
                      value={values.tes.tes2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="tes2"
                      name="tes2"
                      isError={!!errors.tes?.tes2}
                    />
                  </section>

                </section>

              </section>
            </section>

            <section>
              <Button
                height="lg"
                title="Simpan"
                colorSchema="blue"
                isLoading={isLoading}
                isDisabled={isLoading}
              />
            </section>
          </Form>
        </FormikProvider>
      </section>
    </section>
  );
};

export default CreateUser;
