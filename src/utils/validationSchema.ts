import * as Yup from "yup";
import { emailRegExp, passRegExp, passwordError } from "./validation";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required("Enter the required field")
        .matches(emailRegExp, "Please enter valid Email"),
    password: Yup.string()
        .trim()
        .required("Enter the required field")
        .max(16, "Password should be maximum of 16 characters")
        .min(8, "Password should be minimum of 8 characters")
        .matches(passRegExp, passwordError),
});
