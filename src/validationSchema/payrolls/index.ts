import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().required(),
  payment_method: yup.string().required(),
  status: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
