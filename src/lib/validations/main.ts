import zod from "zod";

export const signupSchema = zod.object({
  username: zod.string().email({ message: "Must be a valid email address" }),
  password: zod
    .string()
    .min(6, { message: "Must be 6 or more characters long" }),
  firstName: zod
    .string()
    .trim()
    .min(1, { message: "Must be a at least one character" }),
  lastName: zod
    .string()
    .trim()
    .min(1, { message: "Must be a at least one character" }),
});

export const signinSchema = zod.object({
  username: zod.string().email({ message: "Must be a valid email address" }),
  password: zod
    .string()
    .min(6, { message: "Must be 6 or more characters long" }),
});

export const amountSchema = zod.object({
  amount: zod.coerce.number().positive()
});
