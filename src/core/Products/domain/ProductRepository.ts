import { Product } from "./Product";

export interface ProductRepository {
  fetchAll(): Promise<Product[]>;
}
