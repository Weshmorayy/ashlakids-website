export type ProductCategory = 
  | 'chaussures'
  | 'vetements'
  | 'ceremonie'
  | 'sacs-accessoires'
  | 'gros-puériculture';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  priceOptions?: { label: string; price: number }[];
  image: string;
  badge?: string;
  sizes: string[];
  colors?: string[];
  ageGroup?: string;
  isPopular?: boolean;
  isNewArrival?: boolean;
  description: string;
  features: string[];
}

export interface DeliveryZone {
  area: string;
  price: number;
  timeframe: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
}
