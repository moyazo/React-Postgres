import { HTMLProps, ReactNode } from "react"

export type Props = HTMLProps<HTMLButtonElement> & {
    children?: ReactNode
    variant?: 'normal' | 'create' | 'delete' | 'update' | 'up' | 'in'
    onClick?: () => void
    type?: 'button' | 'submit'
}