import { isEmpty } from 'ramda'

const emailReg = /^[A-Zа-яА-Я0-9._%+-]+@[A-Zа-яА-Я0-9.-]+\.[A-Zа-яА-Я]{2,4}$/i
const phoneReg = /[a-z0-9]+$/

const validators = {
  email: value => emailReg.test(String(value).toLowerCase()),
  phone: value => phoneReg.test(String(value)),
  fullname: value => value.length > 2,
  story: value => value.length > 10
}

const errorMessages = {
  email: 'Email is wrong or empty',
  phone: 'Phone must contain only number or special symbols',
  fullname: 'Name must contain at least 2 letters',
  story: 'Your description must include at least one word'
}

export const validateAccount = (form) => {
  const errors = {}
  const requiredFields = ['email', 'phone', 'fullname', 'story']

  requiredFields.forEach((field) => {
    if (!form[field]) {
      errors[field] = errorMessages[field]
    }
    if (!validators[field](form[field])) {
      errors[field] = errorMessages[field]
    }
  })
  debugger
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
