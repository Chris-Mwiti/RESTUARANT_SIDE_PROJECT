import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeletonMenu = () => {
  return (
    <div className="w-full h-max container space-y-8">
      <p className="text-4xl font-medium rubik-wet-paint-regular text-foreground text-center">
        Preview Menu
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="w-[300px] space-y-3">
          <Skeleton className="w-full h-[300px] rounded-md" />
          <Skeleton className="w-full h-6 rounded-md" />
          <Skeleton className="w-full h-6 rounde-md" />
        </div>

        <div className="w-[300px] space-y-3">
          <Skeleton className="w-full h-[300px] rounded-md" />
          <Skeleton className="w-full h-6 rounded-md" />
          <Skeleton className="w-full h-6 rounde-md" />
        </div>

        <div className="w-[300px] space-y-3">
          <Skeleton className="w-full h-[300px] rounded-md" />
          <Skeleton className="w-full h-6 rounded-md" />
          <Skeleton className="w-full h-6 rounde-md" />
        </div>

        <div className="w-[300px] space-y-3">
          <Skeleton className="w-full h-[300px] rounded-md" />
          <Skeleton className="w-full h-6 rounded-md" />
          <Skeleton className="w-full h-6 rounde-md" />
        </div>
      </div>
    </div>
  );
};

export default HomeSkeletonMenu;
