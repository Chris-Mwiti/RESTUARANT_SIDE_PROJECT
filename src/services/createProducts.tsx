import { useToast } from "@/components/ui/use-toast";
import useAxiosInstance from "@/config/axios"
import { useMutation } from "@tanstack/react-query";

interface INewProductInfoObj {
  // Product Details
  productName: string;
  productDescription: string;
  sellingPrice: string;
  productQuantity?: string;
  inventory: {
    quantity: string;
  };

  //Discount Details
  discountId?: string;

  // Category Details
  categoryName: string;
  categoryDescription?: string;


  //Inventory Details

  //Asset Details
  type?: "clothing",
  imageUrl:string[]
}

const values: INewProductInfoObj[] = [
  {
    productName: "Men Pants1",
    productDescription: "Men Pants1",
    imageUrl: ["/dressMe/MALE_PANTS/pant1.jpeg"],
    categoryName: "Men",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Men Pants2",
    productDescription: "Men Pants2",
    imageUrl: ["/dressMe/MALE_PANTS/pant2.jpeg"],
    categoryName: "Men",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Men Pants3",
    productDescription: "Men Pants3",
    imageUrl: ["/dressMe/MALE_PANTS/pant3.jpeg"],
    categoryName: "Men",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Men Pants4",
    productDescription: "Men Pants4",
    imageUrl: ["/dressMe/MALE_PANTS/pant4.jpeg"],
    categoryName: "Men",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Pants1",
    productDescription: "Female Pants1",
    imageUrl: ["/dressMe/FEMALE_PANTS/pant1.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Pants2",
    productDescription: "Female Pants2",
    imageUrl: ["/dressMe/FEMALE_PANTS/pant2.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Pants3",
    productDescription: "Female Pants3",
    imageUrl: ["/dressMe/FEMALE_PANTS/pant3.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Pants4",
    productDescription: "Female Pants4",
    imageUrl: ["/dressMe/FEMALE_PANTS/pant4.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Shirts1",
    productDescription: "Male Shirts1",
    imageUrl: ["/dressMe/SHIRTS/shit1.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Shirts2",
    productDescription: "Male Shirts2",
    imageUrl: ["/dressMe/SHIRTS/shirt2.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Shirts3",
    productDescription: "Male Shirts3",
    imageUrl: ["/dressMe/SHIRTS/shirt3.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Shirts4",
    productDescription: "Male Shirts4",
    imageUrl: ["/dressMe/SHIRTS/shirt4.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Suit1",
    productDescription: "Male Suit1",
    imageUrl: ["/dressMe/SUITS/suit1.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Suit2",
    productDescription: "Male Suit2",
    imageUrl: ["/dressMe/SUITS/suit2.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Suit3",
    productDescription: "Male Suit3",
    imageUrl: ["/dressMe/SUITS/suit3.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Male Suit4",
    productDescription: "Male Suit4",
    imageUrl: ["/dressMe/SUITS/suit4.jpeg"],
    categoryName: "Male",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Blouses1",
    productDescription: "Female Blouses1",
    imageUrl: ["/dressMe/BLOUSES/blouse1.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Blouses2",
    productDescription: "Female Blouses2",
    imageUrl: ["/dressMe/BLOUSES/blouse2.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Blouses3",
    productDescription: "Female Blouses3",
    imageUrl: ["/dressMe/BLOUSES/blouse3.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Blouses4",
    productDescription: "Female Blouses4",
    imageUrl: ["/dressMe/BLOUSES/blouse4.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Dresses1",
    productDescription: "Female Dresses1",
    imageUrl: ["/dressMe/DRESSES/dress1.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
  {
    productName: "Female Dresses2",
    productDescription: "Female Dresses2",
    imageUrl: ["/dressMe/DRESSES/dress2.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },

  {
    productName: "Female Dresses3",
    productDescription: "Female Dresses3",
    imageUrl: ["/dressMe/DRESSES/dress3.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },

  {
    productName: "Female Dresses4",
    productDescription: "Female Dresses4",
    imageUrl: ["/dressMe/DRESSES/dress4.jpeg"],
    categoryName: "Female",
    inventory: {
      quantity: "100",
    },
    sellingPrice: "300",
    type: "clothing",
  },
];

const useCreateProducts = () => {
    const axiosInstance = useAxiosInstance();
    const { toast } = useToast();
    return useMutation({
        mutationKey: ["creatingProducts"],
        mutationFn: () => axiosInstance.post("/api/product",values).then(res => res.status),
        onSuccess(data, variables, context) {
            toast({
                title: "Product creation success",
            })
        },
    })
}

export default useCreateProducts