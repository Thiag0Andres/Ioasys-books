import yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export interface IBooksResponse {
  data: IBook[];
  page: number;
  totalPages: number;
  totalItems: number;
}

export type ValidationLoginSchemaType = {
  [key in keyof Required<ILoginForm>]: yup.SchemaOf<unknown>;
};
