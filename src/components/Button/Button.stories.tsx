import { Button } from "./Button.tsx"
import { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
}

/** Secondary variant*/
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
}

/** Link as ButtonPrimaryAsLink variant*/
export const ButtonPrimaryAsLink: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a href={"https://google.com"}>Google</a>,
  },
}

/** Link as ButtonSecondaryAsLink variant*/
export const ButtonSecondaryAsLink: Story = {
  args: {
    ...ButtonPrimaryAsLink.args,
    children: <a href={"https://ya.ru/"}>Yandex</a>,
  },
}
