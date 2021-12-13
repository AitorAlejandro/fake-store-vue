import type { Rate, Url } from "../../types";

export class Product {
  readonly category: string;
  readonly description: string;
  readonly id: number;
  readonly image: Url;
  readonly price: number;
  readonly rating: Rate;
  readonly title: string;

  constructor({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
  }: {
    category: string;
    description: string;
    id: number;
    image: Url;
    price: number;
    rating: Rate;
    title: string;
  }) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.title = title;
  }
}
