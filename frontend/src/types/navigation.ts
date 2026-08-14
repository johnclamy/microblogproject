// /src/types/navigation.ts
import { type LinkProps } from 'react-router'
import { type LucideIcon } from 'lucide-react'


export type NavbarProps = {
  /** Currently active path. If omitted, the navbar tracks it internally. */
  activePath?: string;
}


export default interface NavItemProps {
  id?: string
  label: string
  // This type captures string paths as well as complex history location objects
  to: LinkProps['to']
  icon: LucideIcon
}


export interface NavLinkProps {
    item: NavItemProps
    active?: boolean   // defaults to react router active classes
    onNavigate: (to: LinkProps['to']) => void
}
