import { ProductDto } from "../product.dto";
import { Product } from "./product";

export interface DataProduct{
    data:Product[];
    totalProducts:number;
    totalPages:number;
}