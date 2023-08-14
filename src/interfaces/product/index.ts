import { AnimationInterface } from 'interfaces/animation';
import { DiscountInterface } from 'interfaces/discount';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  animation?: AnimationInterface[];
  discount?: DiscountInterface[];
  organization?: OrganizationInterface;
  _count?: {
    animation?: number;
    discount?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
