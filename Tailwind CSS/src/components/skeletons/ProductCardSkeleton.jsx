export default function ProductCardSkeleton() {
  return (
    <div className="relative animate-pulse transition ease duration-250 rounded-md w-full bg-white dark:bg-secundaryDark overflow-hidden">
      <div className="w-full h-[292px] bg-skeleton dark:bg-skeletonDark"></div>
      <div className="my-3 px-5">
        <h1 className="flex flex-col gap-2 mb-3 min-h-12">
          <div className="w-full h-[20px] bg-skeleton dark:bg-skeletonDark"></div>
          <div className="w-[100px] h-[20px] bg-skeleton dark:bg-skeletonDark"></div>
        </h1>
        <h2 className="w-[92px] h-[20px] bg-skeleton dark:bg-skeletonDark"></h2>
        <div className="my-3 w-[92px] h-[20px] bg-skeleton dark:bg-skeletonDark"></div> 
        <div className="flex justify-center w-full">
          <div className="rounded-full py-2 px-3 w-[112px] h-[40px] bg-skeleton dark:bg-skeletonDark transition ease duration-250"></div>
        </div>
      </div> 
    </div>
  );
}
