import * as yup from 'Yup'

const VALIDATION_SIGN_IN = yup.object().shape({
   email: yup.string().email().required('Email обязателен'),
   password: yup
      .string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен быть не менее 6 символов'),
})

const VALIDATION_SIGN_UP = yup.object().shape({
   name: yup.string().required('Имя обязательно'),
   lastName: yup.string().required('Фамилия обязательна'),
   email: yup.string().email().required('Email обязателен'),
   password: yup
      .string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен быть не менее 6 символов'),
   repeatPassword: yup
      .string()
      .required('Повторите пароль')
      .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})

export { VALIDATION_SIGN_IN, VALIDATION_SIGN_UP }
