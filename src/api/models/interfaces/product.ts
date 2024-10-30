import { Category } from "./category";
import { ProductImages } from "./product-images";

export interface Product {
    product_id:number;
    product_name:string;
    color_name:string;
    quantity_in_stock:number;
    price:number;
    category_id:number;
    created_at:string;
    price_cash:number;
    installment_times:number;
    category:Category;
    productImages:ProductImages[];
    isFavorite?:boolean;
}