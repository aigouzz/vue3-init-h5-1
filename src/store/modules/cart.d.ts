export interface State {
  items: Array<any>;
  name: string;
  count: number;
  // cartArray: JSON.parse(localStorage.getItem('cartArray')) || [],
  checkoutStatus: any;
  products?: any;
  name?: any;
}
