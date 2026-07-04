import { ReactNode } from "react";
import BackPageButton from "@/app/ui/client/backpagebutton";

export function TitledPage({
  title,
  description,
  backButton = false,
  children,
}: {
  title: string;
  description?: string;
  backButton?: boolean;
  children?: ReactNode;
}) {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2">
          {backButton && <BackPageButton />}
          <p className="md:text-3xl text-center">{title}</p>
        </div>
        {description && <p className="text-center">{description}</p>}
        {children}
      </div>
    </main>
  );
}
