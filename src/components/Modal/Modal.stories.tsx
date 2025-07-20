import { Meta, StoryObj } from "@storybook/react-vite"
import { Modal } from "./Modal.tsx"
import { useState } from "react"
import { Button } from "../Button/Button.tsx"
import { ModalRadix } from "../ModalRadix/ModalRadix.tsx"

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const BaseModal: Story = {
  args: {
    open: true,
    onClose: () => console.log("on close"),
    modalTitle: "modal title",
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
