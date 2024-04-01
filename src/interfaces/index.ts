import { Products } from "@/pages/Home/services/getProducts";

export interface IUser {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    avatarUrl:string;
    orderDetails:IOrders[]
}

export interface IProducts extends Products {}

export interface IOrders {
    id:string;
    total:number;
    status: "completed" | "pending" | "refunded";
    items:{
        id:string;
        orderId:string;
        productId:string;
        quantity:number;
        price:number;
        product:{
            productName:string;
            productDescription:string;
            sellingPrice:number;
            asset:{
                id:string;
                images:string[]
            }[]
        }
    }[]
}
