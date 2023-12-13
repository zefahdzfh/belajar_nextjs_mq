import { BaseResponsePagination } from "@/lib/axiosClient";
interface Book {
  id: number;
  title: string;
  author: string;
  year: number | undefined | string;
  created_at: string;
  updated_at: string;
}

export interface BookListResponse extends BaseResponsePagination {
  data: Book[];
}

export interface BookListFilter extends Partial<Book> {
  from_year?: string;
  to_year?: string;
  page: number;
  pageSize: number;
}

export interface BookCreatePayload
  extends Pick<Book, "author" | "title" | "year"> {}

export interface BookCreateResponse {
  status: string;
  message: string;
  data?: Book;
}

export interface BookUpdatePayload extends BookCreatePayload {}
export interface BookUpdateResponse extends BookCreateResponse{}

export interface BookDetailResponse extends Book{}

export interface BookCreateArrayPayload {
  data: BookCreatePayload[];
}

export interface BookDeleteArrayPayload {
  data : number[]
}
