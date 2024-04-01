import {create} from 'zustand'

export type TOrderItem = {
    total:number;
    quantity:number;
    price:number;
    productId:string;
    productName:string;
    assetImage:string;
}

export type TOrderDto = {
    total:number;
    items:Pick<TOrderItem, "productId" | "quantity" | "price" >[]
}

interface IOrderStore {
    orders:TOrderItem[];
    actions: {
        addOrderItem:(order:TOrderItem) => void;
        removeOrderItem:(index:number) => void;
        updateOrderItem: (index:number, item:TOrderItem) => void;
        findOrderItem:(index:number) => TOrderItem | undefined;
        removeAllItem:() => void;
        getTotalOrderDto:() => TOrderDto;
    }
}

const useOrdersStore = create<IOrderStore>((set,get) => (
    {
        orders:[],
        actions: {
            addOrderItem(order) {
                return set((state) => ({
                    ...state,
                    orders: [...get().orders, order]
                }))
            },
            removeOrderItem(itemIndex) {
                const filteredOrderItems = get().orders.filter((item,index) => index !== itemIndex);
                return set((state) => ({
                    ...state,
                    orders: filteredOrderItems
                }))
            },
            getTotalOrderDto() {
               const totalOrderPrice = get().orders.reduce((accum,curr) => {
                    accum += curr.total;
                    return accum
               },0) 
               const orderDetailsDto = get().orders.map(item => {
                return {
                    productId:item.productId,
                    quantity:item.quantity,
                    price:item.price
                }
               })

               const finalOrderDto = {
                total: totalOrderPrice,
                items: orderDetailsDto
               }

               return finalOrderDto as TOrderDto
            },
            findOrderItem(index) {
                const item = get().orders.find((_,i) => i == index);
                return item;
            },
            updateOrderItem(index, item) {
                const filteredOrderItems = get().orders.filter((_,i) => i !== index);
                return set((state) => ({
                    ...state,
                    orders: [...filteredOrderItems,item]
                }))
            },
            removeAllItem() {
                return set((state) => ({
                    ...state,
                    orders: []
                }))
            },
        }
    }
))

const useOrders = () => useOrdersStore(state => state.orders);
const useOrderActions = () => useOrdersStore(state => state.actions);

export {
    useOrders,
    useOrderActions
}

export default useOrdersStore