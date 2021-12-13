import {ProductDTO} from "../dto";
import {Product} from "../../domain";

export function productDTOtoProduct(dto: ProductDTO[]) {
  const products: Product[] = dto.map(
    (product: ProductDTO) => new Product(product)
  );
  return products;
}
