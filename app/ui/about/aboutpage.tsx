import { fetchAboutById } from "@/app/lib/actions"

export async function AboutPage({ params }: { params: { id: string } }) {
  const id = params.id;
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
    </>
  )
}