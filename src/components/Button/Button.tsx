import { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"
import clsx from "clsx"
import { Slot } from "@radix-ui/react-slot"

type Props = {
  /** Choose from 3 style variants. Default: 'primary'. */
  variant?: "primary" | "secondary" | "outline"
  /** Render the Button using any element if asChild true */
  asChild?: boolean
} & ComponentPropsWithoutRef<"button">

/** Ui kit Button component */
export const Button = ({ variant = "primary", asChild, className, ...rest }: Props) => {
  const Component = asChild ? Slot : "button"
  return <Component className={clsx(s.button, s[variant], className)} {...rest} />
}
