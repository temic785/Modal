import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "../Button/Button.tsx"
import { ModalRadix } from "./ModalRadix.tsx"

const meta = {
  component: ModalRadix,
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof ModalRadix>

export const BaseModalRadix: Story = {
  args: {
    modalTitle: "modal title",
    size: "sm",
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio exercitationem quod sit soluta.
        A aliquid dolor doloribus eius ex explicabo labore maxime nihil nobis non, perspiciatis, quisquam, tempore
        vitae!
      </div>
    ),
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
      setShowModal(true)
    }

    const closeModalHandler = () => {
      setShowModal(false)
    }

    return (
      <>
        <Button variant={"primary"} onClick={openModalHandler}>
          Open modal
        </Button>
        <ModalRadix {...args} open={showModal} onClose={closeModalHandler} />
      </>
    )
  },
}
