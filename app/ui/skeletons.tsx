// don't think this works
// const shimmer =
//   'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function AboutCardSkeleton() {
  return (
    <div
      className="col-span-1 h-20 bg-[#3c3e45] rounded-lg border-2 grid grid-cols-2 grid-rows-2 pt-2 pl-2 pr-2 space-y-1">
      <div className="animate-pulse col-span-2 size-6 h-6 w-28 justify-self-center rounded-md bg-gray-600" />
      <div className="animate-pulse h-4 rounded-md w-16 bg-gray-600" />
      <div className="animate-pulse h-4 rounded-md w-16 bg-gray-600 justify-self-end" />
    </div>
  )
}

export function AboutCardsSkeleton() {
  return (
    <div className="grid grid-cols-4 grid-flow-row grid-rows-4 gap-2 pr-2 pl-2">
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
      <AboutCardSkeleton />
    </div>
  );
}

export function AboutPageSkeleton() {
  return (
    <div className="pt-1 flex flex-col justify-center items-center space-y-3">
      <div className="animate-pulse h-6 w-24 bg-gray-600 rounded-md"/>
      <div className="animate-pulse h-3 w-7/12 bg-gray-600 rounded-md"/><br/>
      <div className="animate-pulse h-40 w-1/2 bg-gray-600 rounded-md"/>
    </div>
  )
}