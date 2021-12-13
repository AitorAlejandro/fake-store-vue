import { ProductRepository } from "../domain";

export class Product {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async fetchAll() {
    return this.repository.fetchAll();
  }
}
