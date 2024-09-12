import Link from "next/link"
import { usePathname } from "next/navigation"

// is there a better way of inheriting className?
export function SentientLink({href, label, className=''}) {
  const pathName = usePathname();
  return (
    <Link href={href} className={className}>
      {href == pathName?`> ${label}`:label}
    </Link>
  )
}