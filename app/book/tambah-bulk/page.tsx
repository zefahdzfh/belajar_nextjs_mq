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
import { DeleteButton } from "@/components/ButtonAction";

const defaultCatatanArray = {
  data: [
    {
      title: "",
      author: "",
      year: undefined,
    },
  ],
};

const siswa = {
  nama: "",
  alamat: "",
  ujian: [
    {
      nilai: null,
      mapel: "",
    },
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

const createBookArraySchema = yup
  .object()
  .shape({
    data: yup.array().of(createBookSchema),
  })
  .default(defaultCatatanArray);

// const ujianSchema = yup.object().shape({
//   nilai: yup.number().nullable().required(),
//   ujianSchema: yup.number().nullable().required(),
// });

// const createUser = yup.object().shape({
//   nama: yup
//     .string()
//     .nullable()
//     .required("Nama Wajib diisi")
//     .matches(
//       /^[A-Z][a-zA-Z]{2,11}$/,
//       "Nama harus mengandung setidaknya 1 huruf kapital, minimal 3 huruf, dan maksimal 12 huruf"
//     ),
//   alamat: yup.string().nullable().required(),
//   ujian: yup.array().of(ujianSchema),
//   tes: yup.object().shape({
//     tes1: yup.string().nullable().required(),
//     tes2: yup.string().nullable().required(),
//   }),
// });

const CreateBook = () => {
  const { useCreateBulkBook } = useBookModule();
  const { mutate, isLoading } = useCreateBulkBook();
  const onSubmit = async (values: BookCreateArrayPayload) => {
    mutate(values, {
      onSuccess: () => {
        resetForm();
        setValues(defaultCatatanArray);
      },
    });
  };

  const formik = useFormik<BookCreateArrayPayload>({
    initialValues: createBookArraySchema.getDefault(),
    validationSchema: createBookArraySchema,
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
    <section className="flex items-center  justify-center w-full h-full overflow-auto py-10">
      <section className="w-1/2">
        <Link href={"/book"}>
          <span className="flex items-center">
            {" "}
            <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
            Kembali
          </span>
        </Link>
        <h2 className="text-xl font-bold text-gray-500">Tambah Buku</h2>
        {JSON.stringify(errors)}
        <FormikProvider value={formik}>
          <Form className="space-y-5" onSubmit={handleSubmit}>
            <FieldArray
              name={"data"}
              render={(arrayHelpers: ArrayHelpers) => (
                <>
                  {values &&
                    values?.data?.map((value, index) => (
                      <section
                        key={index}
                        className="space-y-2 shadow-lg p-5 relative"
                      >
                        <section className="flex items-center justify-end">
                          <DeleteButton
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </section>
                        <section>
                          <Label htmlFor="title" title="Title" />
                          <InputText
                            value={value.title}
                            placeholder="Judul Buku"
                            id={`data[${index}]title`}
                            name={`data[${index}]title`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isError={getIn(errors?.data?.[index], "title")}
                            messageError={getIn(errors?.data?.[index], "title")}
                          />
                        </section>
                        <section>
                          <Label htmlFor="author" title="Auhtor" />
                          <InputText
                            value={value.author}
                            placeholder="Penulis Buku"
                            id={`data[${index}]author`}
                            name={`data[${index}]author`}
                            onChange={(e) => {
                              setFieldValue(
                                `data[${index}]author`,
                                e.target.value
                              );
                            }}
                            onBlur={handleBlur}
                            isError={
                              getIn(errors?.data?.[index], "author") &&
                              getIn(touched?.data?.[index], "title")
                            }
                            messageError={
                              getIn(errors?.data?.[index], "author") &&
                              getIn(touched?.data?.[index], "title")
                            }
                          />
                        </section>
                        <section>
                          <Label htmlFor="year" title="Year" />
                          <Select
                            value={value.year}
                            id={`data[${index}]year`}
                            name={`data[${index}]year`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={option}
                            isError={getIn(errors?.data?.[index], "year")}
                            messageError={getIn(errors?.data?.[index], "year")}
                          />
                        </section>
                      </section>
                    ))}

                  <section>
                    <Button
                      title="+"
                      colorSchema="blue"
                      variant="outline"
                      onClick={() =>
                        arrayHelpers.push(createBookSchema.getDefault())
                      }
                    />
                  </section>
                </>
              )}
            />

            <section>
              <Button
                height="md"
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

export default CreateBook;
