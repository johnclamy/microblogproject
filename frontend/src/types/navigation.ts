import { type LucideIcon } from 'lucide-react'


export type NavbarProps = {
  /** Currently active path. If omitted, the navbar tracks it internally. */
  activePath?: string;
}


export default interface NavItemProps {
  label: string
  href: string
  icon: LucideIcon
}


export interface NavLinkProps {
    item: NavItemProps
    active: boolean
    onNavigate: (href: string) => void
}
