import { HTMLProps, ReactNode } from "react"

export type Props = HTMLProps<HTMLButtonElement> & {
    children?: ReactNode
    variant?: 'primary' | 'secondary'
    onClick?: () => void
    type?: 'button' | 'submit'
}