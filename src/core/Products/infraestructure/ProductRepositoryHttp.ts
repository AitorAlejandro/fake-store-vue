import { Product, ProductRepository } from "../domain";
import {
  createHeaders,
  createRequest,
  FAKE_API_URL,
} from "../../Shared/infraestructure";
import { ProductDTO } from "./dto";
import { productDTOtoProduct } from "./mapper";

export class ProductRepositoryHttp implements ProductRepository {
  async fetchAll(): Promise<Product[]> {
    const headers: Headers = createHeaders();
    const request: Request = createRequest(`${FAKE_API_URL}/products`);
    const response: Response = await fetch(request, { method: "GET", headers });
    if (!response.ok) throw new Error(response.statusText);
    const productDTO: ProductDTO[] = await response.json();
    const products: Product[] = productDTOtoProduct(productDTO);
    return products;
  }
}
