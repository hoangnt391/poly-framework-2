import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "Trường tên không được để trống ",
    "any.required": "Trường tên là bắt buộc ",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Trường email không được để trống ",
    "string.email": "Trường email không đúng định dạng ",
    "any.required": "Trường email là bắt buộc ",
  }),
  address: joi.string().required().messages({
    "string.empty": "Trường address không được để trống ",
    "string.email": "Trường address không đúng định dạng ",
    "any.required": "Trường address là bắt buộc ",
  }),
  gender: joi.any(),
  tel: joi.any(),
  imagesAvt: joi.any(),
  password: joi.string().min(6).required().messages({
    "string.empty": "Trường mật khẩu không được để trống ",
    "string.min": "Trường mật khẩu phải có ít nhất 6 ký tự ",
    "any.required": "Trường mật khẩu là bắt buộc ",
  }),
  confirmpassword: joi.string().valid(joi.ref("password")).required().messages({
    "string.empty": "Trường xác nhận mật khẩu không được để trống ",
    "any.required": "Trường xác nhận mật khẩu là bắt buộc ",
    "any.only": "Trường xác nhận mật khẩu không khớp ",
  }),
});

export const signinSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Trường email không được để trống ",
    "string.email": "Trường email không đúng định dạng ",
    "any.required": "Trường email là bắt buộc ",
  }),
  password: joi.string().min(6).required().messages({
    "string.empty": "Trường mật khẩu không được để trống ",
    "string.min": "Trường mật khẩu phải có ít nhất 6 ký tự ",
    "any.required": "Trường mật khẩu là bắt buộc ",
  }),
});
