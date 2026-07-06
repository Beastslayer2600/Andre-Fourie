export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  description: string;
  category: string;
  movement: string;
  caseSize: string;
  strap: string;
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
