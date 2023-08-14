import * as yup from 'yup';

export const animationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  product_id: yup.string().nullable(),
});
