import { Cart } from "../Cart/Cart.tsx"
import s from "./Header.module.css"
import { Button } from "../Button/Button.tsx"

export const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.container}>
        <h3>logotype</h3>
        <Cart />
        <Button asChild>
          <a href="/sign-up">Sign Up</a>
        </Button>
      </div>
    </div>
  )
}
