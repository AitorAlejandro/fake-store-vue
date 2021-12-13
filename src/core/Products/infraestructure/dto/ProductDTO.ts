import type {Rate, Url} from "../../../types";

export type ProductDTO = {
  category: string;
  description: string;
  id: number;
  image: Url;
  price: number;
  rating: Rate;
  title: string;
};
