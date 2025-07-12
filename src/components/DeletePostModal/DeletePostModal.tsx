import { ModalRadix } from "../ModalRadix/ModalRadix.tsx"

type Props = {
  open: boolean
  onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={"Delete Post"}>
      Are you sure you want to delete this post?
      <div>
        <button onClick={onClose}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </ModalRadix>
  )
}
