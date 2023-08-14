import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface AnimationInterface {
  id?: string;
  name: string;
  product_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface AnimationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  product_id?: string;
}
