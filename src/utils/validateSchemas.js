import * as Yup from "yup";

export const SCHEMA_TASK = Yup.object({
  body: Yup.string("Must be string")
    .matches(/^.{3,100}$/, "The task must contain from 3 to 100 symbols")
    .required("Must be required"),
});
