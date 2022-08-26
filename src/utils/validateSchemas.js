import * as Yup from "yup";

export const SCHEMA_TASK = Yup.object({
  body: Yup.string()
    .min(3, "Task must be at least 3 characters")
    .max(100, "Task must be at most 100 characters")
    .required("Enter your task here"),
});
