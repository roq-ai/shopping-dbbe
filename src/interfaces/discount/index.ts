import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface DiscountInterface {
  id?: string;
  percentage: number;
  product_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface DiscountGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
}
