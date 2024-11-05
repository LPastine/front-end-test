export interface Product {
  productId: number;
  productName: string;
  stars: number | null;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: Installment[];
}

export interface Installment {
  quantity: number;
  value: number;
}
