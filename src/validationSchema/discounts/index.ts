import * as yup from 'yup';

export const discountValidationSchema = yup.object().shape({
  percentage: yup.number().integer().required(),
  product_id: yup.string().nullable(),
});
