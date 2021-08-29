import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const SignupSchema = Yup.object().shape({
  firtsName: Yup.string()
    .min(2, 'First name too short!')
    .max(10, 'First name Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'First name too Short!')
    .max(10, 'First name too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  numberPhone: Yup.string()
    .required('required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  // password: Yup.string()
  //   .required('Chưa nhập mật khẩu.')
  //   .min(8, 'Mật khẩu quá ngắn - ít nhất phải 8 ký tự.')
  //   .matches(/(?=.*[0-9])/, 'Mật khẩu phải chứa nhất một số.'),
  password: Yup.string()
    .required('Please enter a password')
    .min(6, 'Password must have at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Please confirm password')
    .oneOf([Yup.ref('password')], 'Password & Confirm Password does not match'),
});
