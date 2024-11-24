import BackPageButton from "@/app/ui/client/backpagebutton";
//consider also making default page builder here or adding that to layout

/**
 * Common header element containing a simple title and back button.
 * @param pageTitle The title of the page.
 * @constructor
 */
export function Header({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="flex justify-center space-x-2">
      <BackPageButton/>
      <p className="md:text-3xl text-center">{pageTitle}</p>
    </div>
  );
}

export const buttonTypes = {
  default: "bg-[#3c3e45] rounded-lg border-2",
  hoverable: "bg-[#3c3e45] rounded-lg border-2 hover:bg-sky-700",
};

export const textInputTypes = {
  default: "bg-[#2B2D31] rounded-lg w-1/6 text-xl text-center",
};
