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


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required("Enter user's name")
        .min(3, "Name should be minimum of 3 characters")
        .max(60, "Name should be maximum of 60 characters"),
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
    confirmPassword: Yup.string()
        .trim()
        .required("Enter the required field")
        .oneOf(
            [Yup.ref("password")],
            "Password and Confirm Password must match"
        ),
})

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required("Enter the required field")
        .matches(emailRegExp, "Please enter valid Email")
})