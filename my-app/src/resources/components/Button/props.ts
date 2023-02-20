import { HTMLProps, ReactNode } from "react"

export type Props = HTMLProps<HTMLButtonElement> & {
    children?: ReactNode
    variant?: 'normal' | 'create' | 'delete' | 'update' | 'up' | 'in' | 'sync'
    onClick?: () => void
    type?: 'button' | 'submit'
}