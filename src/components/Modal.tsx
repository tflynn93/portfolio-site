import { type MouseEvent } from 'react'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  imageUrl: string
  title: string
  onClose: () => void
}

export function Modal({ isOpen, imageUrl, title, onClose }: ModalProps) {
  if (!isOpen) return null

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className="modal-image-container">
          <img src={imageUrl} alt={title} className="modal-image" />
        </div>
        <p className="modal-title">{title}</p>
      </div>
    </div>
  )
}
