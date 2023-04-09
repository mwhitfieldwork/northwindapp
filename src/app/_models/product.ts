import { Category } from "./category";
import { OrderDetails } from "./order-details";
import { Supplier } from "./supplier";

export interface Product {
    productId: number,
    productName: string,
    upplierId:  number,
    categoryId: number,
    quantityPerUnit: string,
    unitPrice: number,
    unitsInStock: number,
    unitsOnOrder: number,
    reorderLevel: number,
    discontinued: boolean,
    category: Category,
    supplier: Supplier,
    orderDetails: OrderDetails
}
