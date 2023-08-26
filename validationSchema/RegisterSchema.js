/** @format */

import * as Yup from "yup";
const passwordRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?\\/])(?!.*\s).{8,}$/;
export const RegisterSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRules, "Password must be strong"),
});
