import { fetchAboutById } from "@/app/lib/actions"
import { auth } from "@/auth";
import { buttonTypes } from "@/app/ui/frequent";
import Link from "next/link";

export async function AboutPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await auth();
  const { editDate, title, description, author } = await fetchAboutById(id) ||
  {
    editDate: '404',
    title: '404',
    description: '404',
    author: '404'
  };
  return (
    <>
      <h1 className="text-2xl">{title}</h1>
      <p>
        {`Last Edited: ${editDate} by ${author}`}
      </p><br />
      <p className="text-xl">
        {description}
      </p>
      {
        session?.user?.email === 'tinbolw@gmail.com' ?
          <div className="flex justify-center">
            <Link className={`${buttonTypes.hoverable} text-2xl w-16`} href={`/about/${params.id}/edit`}>Edit</Link>
          </div> : <></>
      }
    </>
  )
}