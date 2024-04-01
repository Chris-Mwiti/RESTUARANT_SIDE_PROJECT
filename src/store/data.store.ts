import { IOrders, IProducts, IUser } from "@/interfaces";
import { create } from "zustand";

export interface IAppDataStore {
  userInfo: IUser;
  orders: IOrders[];
  products: IProducts[];
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  };
  isDialogOpen:boolean;
  actions: IAppDataStoreActions;
}

interface IAppDataStoreActions {
  addUserDetails: (userDto: IUser) => void;
  addToken: (token: IAppDataStore["token"]) => void;
  isLoggerIn: () => boolean;
  getPreviewProducts: (elements?: number) => IProducts[];
  getBurgers: () => IProducts[];
  getPizzas: () => IProducts[];
  getSmoothies: () => IProducts[];
  getTraditions: () => IProducts[];
  getBreakFasts: () => IProducts[];
  getLunches: () => IProducts[];
  getDesserts: () => IProducts[];
  setProducts: (products: IProducts[]) => void;
  openDialog:() => void;
  setDialogState: (state:boolean) => void;
}

type TAppDataStore = IAppDataStore;

const useAppDataStore = create<TAppDataStore>((set, get) => ({
  userInfo: {
    id: localStorage.getItem("marsUserId") || "",
    email: "",
    firstName: "",
    lastName: "",
    avatarUrl: "",
    orderDetails: [
      {
        id: "",
        total: 0,
        status: "pending",
        items: [
          {
            id: "",
            orderId: "",
            product: {
              productName: "",
              productDescription: "",
              asset: [
                {
                  id: "",
                  images: [],
                },
              ],
              sellingPrice: 0,
            },
            productId: "",
            price: 0,
            quantity: 0,
          },
        ],
      },
    ],
  },
  orders: [],
  token: {
    accessToken: localStorage.getItem("venusAccessToken"),
    refreshToken: localStorage.getItem("venusRefreshToken"),
  },
  products: [],
  isDialogOpen: false,
  actions: {
    addUserDetails(userDto) {
      return set((state) => ({
        ...state,
        userInfo: userDto,
      }));
    },
    addToken(token) {
      if (token.accessToken && token.refreshToken) {
        localStorage.setItem("venusAccessToken", token.accessToken);
        localStorage.setItem("venusRefreshToken", token.refreshToken);
      }
      return set((state) => ({
        ...state,
        token,
      }));
    },
    isLoggerIn() {
      return get().token.accessToken ? true : false;
    },
    setProducts(products) {
      return set((state) => ({
        ...state,
        products: products,
      }));
    },
    getPreviewProducts(elements) {
      const previewProducts = get().products.slice(0, 4);
      return previewProducts;
    },
    getBurgers() {
      const burgerProducts = get().products.filter(
        (item) => item.category.categoryName == "Burgers"
      );
      return burgerProducts;
    },
    getPizzas() {
      const pizzaProducts = get().products.filter(
        (item) => item.category.categoryName == "Pizza"
      );
      return pizzaProducts;
    },
    getSmoothies() {
      const smoothieProducts = get().products.filter(
        (item) => item.category.categoryName == "Smoothies"
      );
      return smoothieProducts;
    },
    getTraditions() {
      const traditionProducts = get().products.filter(
        (item) => item.category.categoryName == "Tradition"
      );
      return traditionProducts;
    },
    getBreakFasts() {
        const breakFastProducts = get().products.filter(
          (item) => item.category.categoryName == "Breakfast menu"
        );
        console.log(breakFastProducts);
        return breakFastProducts;
    },
    getDesserts() {
        const dessertProducts = get().products.filter(
          (item) => item.category.categoryName == "Desserts"
        );
        return dessertProducts
    },
    getLunches() {
        const lunchProducts = get().products.filter(
          (item) => item.category.categoryName == "Luncheon menu"
        );
        return lunchProducts;
    },
    openDialog() {
        return set((state) => ({
            ...state,
            isDialogOpen: true
        }))
    },
    setDialogState(status) {
        return set((state) => ({
            ...state,
            isDialogOpen: status
        }))
    },
  },
}));

export const useUserInfo = () =>
  useAppDataStore((state) => {
    const user = {
      id: state.userInfo.id,
      name: `${state.userInfo.firstName} ${state.userInfo.lastName}`,
      avataUrl: state.userInfo.avatarUrl,
      email: state.userInfo.email,
    };
    return user;
  });
export const useOrders = () => useAppDataStore((state) => state.orders);
export const useAlertDialogStatus = () => useAppDataStore(state => state.isDialogOpen);
export const useAppActions = () => useAppDataStore((state) => state.actions);


export default useAppDataStore;
