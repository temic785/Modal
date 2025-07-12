import { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"
import clsx from "clsx"
import { Slot } from "@radix-ui/react-slot";

type Props = {
  variant?: "primary" | "secondary" | "outline"
  asChild?: boolean
} & ComponentPropsWithoutRef<"button">
export const Button = ({ variant = "primary", asChild, className, ...rest }: Props) => {
  const Component = asChild ? Slot : "button"
  return <Component className={clsx(s.button, s[variant], className)} {...rest} />
}
