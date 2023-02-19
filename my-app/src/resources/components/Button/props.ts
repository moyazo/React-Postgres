import { HTMLProps, ReactNode } from "react"

export type Props = HTMLProps<HTMLButtonElement> & {
    children?: ReactNode
    variant?: 'normal' | 'create' | 'delete' | 'update'
    onClick?: () => void
    type?: 'button' | 'submit'
}