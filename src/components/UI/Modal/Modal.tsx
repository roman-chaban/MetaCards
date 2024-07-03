import { useState, type FC } from 'react'
import styles from './Modal.module.scss'
import { Dialog } from '@headlessui/react'
import { HistoryBid } from '@/components/HistoryBid/HistoryBid'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className={styles.modal__container}
    >
      <div className={styles.fixed__modal}>
        <HistoryBid onClose={closeModal} />
      </div>
    </Dialog>
  )
}
