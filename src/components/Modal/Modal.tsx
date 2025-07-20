import s from "./Modal.module.css"
import { ReactNode } from "react"
import { createPortal } from "react-dom"

type Props = {
  /** The controlled open state of the Modal */
  open: boolean
  /** Close modal handler */
  onClose?: () => void
  /** Modal title */
  modalTitle: string
  /** Content to be rendered inside the modal body */
  children: ReactNode
}

/** Ui kit ModalRadix component */
export const Modal = ({ onClose, open, modalTitle, children }: Props) => {
  return (
    <>
      {open && (
        <>
          {createPortal(
            <div className={s.overlay}>
              <div className={s.content}>
                <h3 className={s.title}>{modalTitle}</h3>
                <hr />
                {children}
                <button className={s.closeIcon} onClick={onClose}>
                  x
                </button>
              </div>
            </div>,
            document.body,
          )}
        </>
      )}
    </>
  )
}
