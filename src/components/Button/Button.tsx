import { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"
import clsx from "clsx"

type Props = {
  variant?: "primary" | "secondary" | "outline"
} & ComponentPropsWithoutRef<"button">
export const Button = ({ variant = "primary", className, ...rest }: Props) => {
  return <button className={clsx(s.button, s[variant], className)} {...rest} />

}
