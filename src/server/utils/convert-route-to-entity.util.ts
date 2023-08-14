const mapping: Record<string, string> = {
  animations: 'animation',
  discounts: 'discount',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
