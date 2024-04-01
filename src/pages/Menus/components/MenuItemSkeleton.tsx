import { Skeleton } from "@/components/ui/skeleton";

const MenuItemSkeleton = () => {
  return (
    <div className="w-full space-y-6">
      <span className="w-full h-[100px] relative">
        <img
          src="https://i0.wp.com/www.cookhacker.com/wp-content/uploads/2012/06/Oven-Crispy-Fries-2.jpg?w=2685"
          loading="lazy"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-3xl rubik-wet-paint-regular font-bold text-foreground text-center">
            Menu
          </p>
          <p className="text-muted-foreground rubik-wet-paint-regular text-2xl">
            Enjoy our tasty foods
          </p>
        </div>
      </span>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-2 lg:gap-0">
          <span className="size-full lg:size-[500px] rounded-md shadow-md">
            <Skeleton className="size-full lg:size-[500px] rounded-md" />
          </span>
          <div className="space-y-10 w-full">
            <Skeleton className="w-full h-5 rounded-md " />
            <Skeleton className="w-full h-5 rounded-md " />
            <Skeleton className="w-full h-10 rounded-md " />
            <Skeleton className="w-full h-5 rounded-md " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemSkeleton