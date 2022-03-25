import yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
}

export type ValidationLoginSchemaType = {
  [key in keyof Required<ILoginForm>]: yup.SchemaOf<unknown>;
};
