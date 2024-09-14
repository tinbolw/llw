import { fetchAbouts } from "@/app/lib/actions";
import { AboutInfo } from "@/app/lib/definitions";
import { AboutCard } from "@/app/ui/about/card";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const abouts = await fetchAbouts();
  return (
    <div className="grid grid-cols-4 grid-flow-row grid-rows-4 gap-2 pr-2 pl-2">
      {
        abouts?.map(({ _id, editDate, title, description, author }: AboutInfo) => {
          return <AboutCard
            _id={_id}
            editDate={editDate}
            title={title}
            description={description}
            author={author}
            key={`${_id}`}
          />
        })
        ??<p className="text-center col-span-4">Database Error...</p>
      }
    </div>
  )
}